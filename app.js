const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const store = require('store2');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname }));
app.get('/prototype', (req, res) => res.sendFile('/prototype/index.html', { root: __dirname }));
app.get('/season3', (req, res) => res.sendFile('/season3/index.html', { root: __dirname }));
app.get('/lunaverse', (req, res) => res.sendFile('/lunaverse/pt.html', { root: __dirname }));
app.get('/tlr', (req, res) => res.sendFile('/tlr/index.html', { root: __dirname }));

app.listen(port, () => console.log(`Server listening at port ${port}`));