const TABLE = process.env.SUPABASE_NEWSLETTER_TABLE || 'newsletter_subscribers';

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
    return json(res, 500, { error: 'Newsletter backend is not configured' });
  }

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  } catch (error) {
    return json(res, 400, { error: 'Invalid JSON payload' });
  }

  const email = clean(body.email, 254).toLowerCase();
  if (!validEmail(email)) return json(res, 400, { error: 'Valid email is required' });

  const payload = {
    email,
    source: clean(body.source, 80) || 'homepage-newsletter',
    user_agent: clean(req.headers['user-agent'], 500),
    updated_at: new Date().toISOString()
  };

  try {
    const base = `${supabaseUrl.replace(/\/$/, '')}/rest/v1/${TABLE}`;
    const response = await fetch(`${base}?on_conflict=email`, {
      method: 'POST',
      headers: {
        apikey: serviceRoleKey,
        authorization: `Bearer ${serviceRoleKey}`,
        'content-type': 'application/json',
        prefer: 'resolution=merge-duplicates,return=representation'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const detail = await response.text();
      return json(res, 502, { error: 'Could not save newsletter signup', detail });
    }

    const rows = await response.json();
    return json(res, 200, { ok: true, subscriber: rows[0] || payload });
  } catch (error) {
    return json(res, 500, { error: 'Could not save newsletter signup' });
  }
};
