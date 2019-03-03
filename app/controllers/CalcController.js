module.exports = {
    index: (req, res)=> {
        res.send("a + b = " + req.query.a + req.query.b);
    }
}