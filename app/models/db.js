const { Pool } = require('pg');

config = require('../../config/db');

module.exports = new Pool(config);