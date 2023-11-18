const express = require('express');
const cors = require('cors');
const router = require('./routers/router');

// Initialize required variables
const app = express();

// Enable Cross-Origin Resource Sharing 
app.use(cors({
    origin: '*'
}));

app.use(router);

module.exports = app;