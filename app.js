const express = require('express');
require('dotenv').config();

// App init
const app = express();

// Routes
app.get('/', (req, res) => {

    res.send('Hello from app.js!');
    
});

// Default error handler
app.use((err, req, res, next) => {

    console.error(err);

    res.status(500).send('Internal server error.');

});

// Server port
const port = process.env.PORT || 3000;

// Run the server
const server = app.listen(port, () => console.log(`App listening on port ${port}`));