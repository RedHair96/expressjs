var pool = require('./db');

module.exports = {
    create: (message, callback) => {
        pool.query("insert into messages(name, email, message) values($1, $2, $3)",[message.name, message.email, message.message], (err)=>{
            callback(err);
        });
    },
}