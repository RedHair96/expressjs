var Albums = require('../models/Albums');

module.exports = {
    index: (req, res) => {
        Albums.findAll((err, albums) => {
            res.render('albums', {albums: albums});
        });    
    },
    specific_Album: (req, res) => {
        Albums.specific_Album(req.params.page, (err, photos) => {
            res.render('specific-album', {album: photos});
        });    
    },
}