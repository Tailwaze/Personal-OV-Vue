const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('../config');
const port = config.port || 5000;
const fs = require('fs');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Load all routes
app.use('/api', require('./routes/api'));

// Launch app on port
app.listen(port, () => console.log('\x1b[31m%s\x1b[0m', '[SERVER]', '\x1b[32m[WEB]\x1b[0m', `Connected @ http://localhost:${port}`));