const fetch = require("node-fetch");

const QueryMaker = async (queryString) => {
  let response = await fetch(`https://www.dnd5eapi.co/graphql`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(
      {query: queryString})
  })
  .then(res=>res.json())
  .then(data=> {
    console.log(data.data)
    return data.data;
  });
  return response;
};

module.exports =  QueryMaker;