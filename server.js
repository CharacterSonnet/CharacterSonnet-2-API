'use strict'
//const { graphql, buildSchema } = require('graphql');
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
app.use(express.json());

const QueryMaker = require('./functions/QueryMaker');
const ClassString = require('./functions/ClassString');
const RaceString = require('./functions/RaceString');

const PORT = process.env.PORT;
//const MONGODB;

const mongoose = require('mongoose');
const { response } = require('express');
//mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});
//const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Mongo Online')
// });

let queryString = `query { races { name, languages { name } } }`;

app.get('/graph', async (req, res) => {
  await QueryMaker(queryString).then(data=>res.send(data));
});

app.get('/class', async (req, res) => {
  let className = req.query.charClass;
  let classQuery = ClassString(className);
  await QueryMaker(classQuery).then(data=>res.send(data));
});

app.get('/race', async (req, res) => {
  let raceName = req.query.race;
  let raceQuery = RaceString(raceName);
  await QueryMaker(raceQuery).then(data=>res.send(data));
});

app.get('/', async (req, res) => {
  console.log('hit the test route');
  res.send('welcome to the character sonnet 2 API');
});

app.listen(PORT, () => {console.log(`listening on port ${PORT}`);});


