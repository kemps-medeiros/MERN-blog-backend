const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/db');
const router = require('./routes/userRoutes');

require('dotenv').config();

const app = express();

//connect mongodb database na pasta config, arquivo db.js
connect();
app.use(bodyParser.json());

app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta: ${PORT}`);
});
