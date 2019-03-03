const bodyParser = require('body-parser');
const express = require('express');

module.exports = (app) => {
    app.use(express.static('public'));
    app.use('/components', express.static('bower_components'));
    app.use(bodyParser.urlencoded({
        extended : true
    }))
}