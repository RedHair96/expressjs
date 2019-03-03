var pool = require('./db');

module.exports = {
    findAll: (callback) => {
        pool.query("select page, avatar from albums",[], (err, result)=>{
            callback(err, result.rows);
        });
    },

    specific_Album: (page, callback) => {
        pool.query("select name, url from albums, photos where albums = albums.id and page=$1",[page], (err, result)=>{
            callback(err, result.rows);
        });
    }
}