const BLOB_ID = '019ec884-82c4-7530-b661-07e2c27d03ba';
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;

exports.handler = async (event) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  try {
    if (event.httpMethod === 'GET') {
      const res = await fetch(BLOB_URL, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('Upstream ' + res.status);
      const data = await res.json();
      return { statusCode: 200, headers, body: JSON.stringify(data) };
    }

    if (event.httpMethod === 'PUT') {
      const res = await fetch(BLOB_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: event.body
      });
      if (!res.ok) throw new Error('Upstream ' + res.status);
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  } catch (e) {
    console.error('sync error:', e.message);
    return { statusCode: 502, headers, body: JSON.stringify({ error: e.message }) };
  }
};
