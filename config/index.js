module.exports = (app) => {
    // Midleware
    require('./middlewares')(app);
    
    // Views
    require('./views')(app);
    
    // Routing
    require('./routes')(app);
}