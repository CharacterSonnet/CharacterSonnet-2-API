'use strict'

const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
app.use(cors());
app.use(express.json());

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

const { graphql, buildSchema } = require('graphql');
let query = '{classes{name}}';

app.get('/graph', async (req, res) => {
  const result = await axios.post('https://www.dnd5eapi.co/graphql', {
    query: `classes {name}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
});

app.get('/', (req, res) => {
  console.log('hit the test route');
  res.send('welcome to the character sonnet 2 API');
});

app.listen(PORT, () => {console.log(`listening on port ${PORT}`);});



// fetch(process.env.GraphQLAPI, {
//   method: "post",
//   headers: {"Content-Type": "application/json"},
//   body: JSON.stringify(
//     {query:`
//       classes {
//         name
//       }
//     `})
// })
// .then(res=>res.json())
// .then(data=>console.log(data.data));