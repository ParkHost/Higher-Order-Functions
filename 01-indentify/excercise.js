const fetch = require('node-fetch')

const url = 'https://www.reddit.com/r/birdswitharms.json'

function responseJSON(res) {
  return res.json()
};

function logresult(result){
  console.log(result);
};

fetch(url).then(responseJSON).then(logresult);

