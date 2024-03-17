const express = require('express');
const cors = require('cors');
const { connection } = require('./database/connection');

const { readdirSync } = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // Default port if PORT environment variable is not set

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const routes = readdirSync('./routes').map((route) => require(`./routes/${route}`));
app.use('/api/v1', routes);

// Start server
const startServer = async () => {
    try {
        await connection(); // Connect to database
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();
