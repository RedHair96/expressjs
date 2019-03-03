const express = require('express');
const app = express();
const port = 3000;

require('./config')(app);

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));