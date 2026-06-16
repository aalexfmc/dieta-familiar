const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use(express.json({ limit: '1mb' }));

// ─── Sync Proxy ──────────────────────────────────────────────
const BLOB_ID = '019ecdbc-6944-700a-9534-b9e6b2eaf16f';
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ FIT server running at http://localhost:${PORT}`);
});
