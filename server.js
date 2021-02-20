const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client')));

app.listen(port);

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'client', 'index.html')));