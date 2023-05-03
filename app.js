const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.listen(process.env.PORT || 3000, function() { // 3000 o el puerto que usen
  console.log("Servidor corriendo");
})