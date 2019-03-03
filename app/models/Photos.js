var pool = require('./db');

module.exports = {
    findAll: (keyword, callback) => {
        pool.query("select * from photos where url like '%' || $1 || '%'",[keyword], (err, result)=>{
            callback(err, result.rows);
        });
    },
}