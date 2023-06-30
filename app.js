const express = require('express');
const path = require("path");
const app = express();

app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('./views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('./views/login.html'))
})