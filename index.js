const express = require('express');
const client = require('./db'); // Import the database client

const app = express();
const port = 3000;

// Define a route
app.get('/', async (req, res) => {
  try {
    // Query the database
    const result = await client.query('SELECT * FROM products'); // Replace 'your_table' with your table name
    res.json(result.rows);
  } catch (err) {
    console.error('Query error', err.stack);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
