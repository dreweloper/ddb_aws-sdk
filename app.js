const express = require('express');
const cors = require('cors');
const { ListTablesCommand } = require('@aws-sdk/client-dynamodb');
const db = require('./src/config/db');
require('dotenv').config();

// App init
const app = express();

// Cors middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Routes
app.get('/', async (req, res, next) => {

    try {

        const command = new ListTablesCommand({});

        const response = await db.send(command);

        if (response['$metadata'].httpStatusCode === 200) {

            res.status(200).json(response);

        };

    } catch (error) {

        next(error);

    };

});

// Default error handler
app.use((err, req, res, next) => {

    console.error(err);

    if (!res.headersSent) {

        res.status(500).send('Internal server error.');

    };

});

// Server port
const port = process.env.PORT || 3000;

// Run the server
app.listen(port, () => console.log(`App listening on port ${port}`));