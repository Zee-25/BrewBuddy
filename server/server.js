const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve the login page at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Serve other pages as needed
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/add-coffee-shop', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/add-coffee-shop.html'));
});
app.get('/coffee-shop-details', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/coffee-shop-details.html'));
});
app.get('/submit-review', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/submit-review.html'));
});
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
