const TABLE = process.env.SUPABASE_MERCH_SIGNUPS_TABLE || 'merch_notifications';

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
    return json(res, 500, { error: 'Merch notification backend is not configured' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const email = clean(body.email, 254).toLowerCase();
  const productId = clean(body.productId || body.product_id, 160);

  if (!validEmail(email)) return json(res, 400, { error: 'Valid email is required' });
  if (!productId) return json(res, 400, { error: 'Product ID is required' });

  const payload = {
    email,
    product_id: productId,
    product_title: clean(body.productTitle || body.product_title, 220),
    size: clean(body.size, 30),
    quantity: Math.max(1, parseInt(body.quantity, 10) || 1),
    price: clean(body.price, 40),
    source: clean(body.source, 80) || 'merch-available-soon',
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
      return json(res, 502, { error: 'Could not save merch signup', detail });
    }

    const rows = await response.json();
    return json(res, 200, { ok: true, signup: rows[0] || payload });
  } catch (error) {
    return json(res, 500, { error: 'Could not save merch signup' });
  }
};
