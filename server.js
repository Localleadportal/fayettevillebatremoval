// Fayetteville Bat Removal — tiny static site server
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public (index.html, images, robots.txt, sitemap.xml)
app.use(express.static(path.join(__dirname, 'public'), {
  extensions: ['html'],
  maxAge: '1h'
}));

// Send the homepage for the root
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Anything else falls back to the homepage (single-page site)
app.use((_req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Fayetteville Bat Removal running on port ${PORT}`);
});
