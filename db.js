const { Client } = require('pg');

// Create a new client instance
const client = new Client({
  host: 'localhost', 
  port: 5432,        
  user: 'postgres', 
  password: '5A69@Te7', 
  database: 'mydb' 
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
