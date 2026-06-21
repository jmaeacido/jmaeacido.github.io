const TABLE = process.env.SUPABASE_CONTACT_SUBMISSIONS_TABLE || 'contact_submissions';

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-methods', 'POST, OPTIONS');
  res.setHeader('access-control-allow-headers', 'content-type');
  res.end(JSON.stringify(body));
}

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return json(res, 204, {});
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return json(res, 500, { error: 'Contact backend is not configured' });
  }

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  } catch (error) {
    return json(res, 400, { error: 'Invalid JSON payload' });
  }

  const firstName = clean(body.firstName || body.first_name, 80);
  const lastName = clean(body.lastName || body.last_name, 80);
  const email = clean(body.email, 254).toLowerCase();
  const subject = clean(body.subject, 120) || 'General enquiry';
  const message = clean(body.message, 2000);

  if (!firstName) return json(res, 400, { error: 'First name is required' });
  if (!lastName) return json(res, 400, { error: 'Last name is required' });
  if (!validEmail(email)) return json(res, 400, { error: 'Valid email is required' });
  if (!message) return json(res, 400, { error: 'Message is required' });

  const payload = {
    first_name: firstName,
    last_name: lastName,
    email,
    subject,
    message,
    source: clean(body.source, 80) || 'contact-page',
    user_agent: clean(req.headers['user-agent'], 500)
  };

  try {
    const response = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/${TABLE}`, {
      method: 'POST',
      headers: {
        apikey: serviceRoleKey,
        authorization: `Bearer ${serviceRoleKey}`,
        'content-type': 'application/json',
        prefer: 'return=representation'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const detail = await response.text();
      return json(res, 502, { error: 'Could not save contact submission', detail });
    }

    const rows = await response.json();
    return json(res, 200, { ok: true, submission: rows[0] || payload });
  } catch (error) {
    return json(res, 500, { error: 'Could not save contact submission' });
  }
};
