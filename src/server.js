// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 5000; // Your preferred port
// Middleware
app.use(cors());
app.use(express.json());
// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost', // Your database host
    user: 'team24',
    password: 'LazyAdmin123!',
    database: 'ampelsystem'
});
// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});
// Define an endpoint to get the data
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM car_data', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 
