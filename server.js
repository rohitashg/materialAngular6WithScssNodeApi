const express = require('express');

// Configuring the database
const config = require('./config.js');

// create express app
let app = express();

app = require('akh-mongo-connect')(app, config);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
