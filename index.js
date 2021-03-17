const express = require('express');
const connect = require('./config/db');

require('dotenv').config();

const app = express();

//connect mongodb database
connect();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});