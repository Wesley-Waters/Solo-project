const express = require('express');
const path = require('path')

const app = express();
const PORT = 5000;

// Parse json from incoming requests
app.use(express.json());

// Send html page when page is loaded
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
});
// Send css file whne requested
app.get('/styles.css', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/styles.css'))
});

// Global request handler
app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT);

module.exports = app;