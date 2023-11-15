// load .env data into process.env
require('dotenv').config();

// Web server config
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');

//Setup cross origin resource sharing
app.use(cors({
  origin: 'http://localhost:3000',
}));

const db = require("./db");

// Separated Routes for each Resource
const spots = require("./routes/spots");
const labels = require("./routes/labels");

// Mount all resource routes
app.use("/api", spots(db));
app.use("/api", labels(db));

// Home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});