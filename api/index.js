// api/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send(`Laura I love you so much, I built a website so that everyone in the world would know.`));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server ready on port ${port}.`);
});

module.exports = app;