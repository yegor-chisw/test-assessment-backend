/* eslint-disable class-methods-use-this */
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const tierRoutes = require('./api/routes/tier.route');

require('dotenv/config');

const app = express();

app.use('/tiers', tierRoutes);

app.use(bodyParser);

const { MONGO_HOST, MONGO_PORT, MONGO_DB, PORT } = process.env;
const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to the db');
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on the ${PORT} port`);
});