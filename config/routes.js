var Router = require('express').Router;
var controllers = require('../app/controllers');

module.exports = (app) => {
    var homeRoutes = Router()
        .get('/', controllers.home.index);
    var albumsRoutes = Router()
        .get('/', controllers.album.index)
        .get('/:page', controllers.album.specific_Album);
    var photoRoutes = Router()
        .get('/', controllers.photos.index);
    var calcRoutes = Router()
        .get('/', controllers.calc.index);
    var contactRoutes = Router()
        .get('/', controllers.contact.index)
        .post('/', controllers.contact.create);

    app.use('/', homeRoutes);
    app.use('/albums', albumsRoutes);
    app.use('/photo', photoRoutes);
    app.use('/contact', contactRoutes);
    app.use('/calc', calcRoutes);
}