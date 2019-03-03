var Photos = require('../models/Photos');
module.exports = {
    index: (req, res) => {
        Photos.findAll(req.query.keyword, (err, photos) => {
            res.render('photo', {photos: photos});
        });
        
    }
}