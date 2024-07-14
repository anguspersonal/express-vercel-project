// api/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send(`Hello Laura! I'm a website built with Express on dVercel`));

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;