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
app.get('/', (req, res) => {
    res.render('index');
});

var albums = [{page: 'photo-xuan', avatar: 'images/xuan-01.jpg'},
              {page: 'photo-ha', avatar: 'images/ha-01.jpg'},
              {page: 'photo-thu', avatar: 'images/thu-01.jpg'},
              {page: 'photo-dong', avatar: 'images/dong-01.jpg'}]
app.get('/albums', (req, res) => {
    res.render('albums', {albums: albums});
});

var photos = ['images/xuan-01.jpg', 'images/xuan-02.jpg', 'images/xuan-03.jpg', 'images/xuan-04.jpg', 'images/xuan-05.jpg', 'images/xuan-06.jpg',
              'images/ha-01.jpg', 'images/ha-02.jpg', 'images/ha-03.jpg', 'images/ha-04.jpg', 'images/ha-05.jpg', 'images/ha-06.jpg',
              'images/thu-01.jpg', 'images/thu-02.jpg', 'images/thu-03.jpg', 'images/thu-04.jpg', 'images/thu-05.jpg', 'images/thu-06.jpg',
              'images/dong-01.jpg', 'images/dong-02.jpg', 'images/dong-03.jpg', 'images/dong-04.jpg', 'images/dong-05.jpg', 'images/dong-06.jpg']
app.get('/photo', (req, res) => {
    res.render('photo', {photos: photos});
});

app.get('/photo-xuan', (req, res) => {
    res.render('photo-xuan', {album_xuan: photos.slice(0, 6)});
});

app.get('/photo-ha', (req, res) => {
    res.render('photo-ha', {album_ha: photos.slice(6, 12)});
});

app.get('/photo-thu', (req, res) => {
    res.render('photo-thu', {album_thu: photos.slice(12, 18)});
});

app.get('/photo-dong', (req, res) => {
    res.render('photo-dong', {album_dong: photos.slice(18, 24)});
});
app.get('/calc', (req, res)=> {
    res.send("a + b = " + req.query.a + req.query.b);
});

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));