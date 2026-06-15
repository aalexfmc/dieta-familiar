const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use(express.json({ limit: '1mb' }));

// ─── Sync Proxy ──────────────────────────────────────────────
const BLOB_ID = '019ec884-82c4-7530-b661-07e2c27d03ba';
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;

// GET /api/sync → proxy GET to jsonblob
app.get('/api/sync', async (req, res) => {
  try {
    const r = await fetch(BLOB_URL, {
      headers: { 'Accept': 'application/json' }
    });
    if (!r.ok) throw new Error('Upstream ' + r.status);
    const data = await r.json();
    res.json(data);
  } catch (e) {
    console.error('syncPull proxy error:', e.message);
    res.status(502).json({ error: e.message });
  }
});

// PUT /api/sync → proxy PUT to jsonblob
app.put('/api/sync', async (req, res) => {
  try {
    const r = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    if (!r.ok) throw new Error('Upstream ' + r.status);
    res.json({ ok: true });
  } catch (e) {
    console.error('syncPush proxy error:', e.message);
    res.status(502).json({ error: e.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ NutriFamilia server running at http://localhost:${PORT}`);
});
