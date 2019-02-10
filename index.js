const express = require('express');
const app = express();
const port = 3000;

// Midleware
app.use(express.static('public'));
app.use(express.static('bower_components'))

// Routing
app.get('/', (req, res) => res.send('Hello World!'));

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));