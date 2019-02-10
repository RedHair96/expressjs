const express = require('express');
const app = express();
const port = 3000;

// Midleware
app.use(express.static('public'));
app.use('/components', express.static('bower_components'));

// Views
app.set('views', './views');
app.set('view engine', 'pug');

// Routing
app.get('/pug', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));