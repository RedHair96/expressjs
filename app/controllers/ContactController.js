Messages = require('../models/Messages');

module.exports = {
    index: (req, res) => {
        res.render('contact');
    },

    create: (req, res) => {
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;

        var isNotEmpty = function(str){
            return str && str.trim() && str.length !== 0;
        }

        if (isNotEmpty(name) & isNotEmpty(email) & isNotEmpty(message)){
            Messages.create({name: name, email: email, message: message},
                (err) => {
                    if (err) {
                        console.log(err);
                        res.render('contact', {alert_error: "Database error!"});
                    } else {
                        res.render('contact', {alert_success: "Your message is sent. We will contact to you soon."});
                    }

                })
            
        } else{
            res.render('contact', {alert_error: "You have not filled out all the information"});
        }
    }
}