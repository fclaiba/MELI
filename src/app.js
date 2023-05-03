const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
