const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello CI/CD!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/version', (req, res) => {
  res.json({ version: require('./package.json').version });
});

module.exports = app;
