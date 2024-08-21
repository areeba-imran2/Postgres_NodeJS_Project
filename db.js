const { Client } = require('pg');

// Create a new client instance
const client = new Client({
  host: 'localhost', // Replace with your host
  port: 5432,        // Replace with your port
  user: 'postgres', // Replace with your username
  password: '5A69@Te7', // Replace with your password
  database: 'mydb'  // Replace with your database name
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
