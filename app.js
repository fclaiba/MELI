const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/home.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
