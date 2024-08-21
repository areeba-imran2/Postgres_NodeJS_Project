require('dotenv').config(); // Load environment variables from .env file

const { Client } = require('pg');

// Create a new client instance
const client = new Client({
  host: process.env.DB_HOST, 
  port: process.env.DB_PORT,        
  user: process.env.DB_USER, 
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
