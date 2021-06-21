// const url = "http://pokeapi.salestock.net/api/v2/pokemon/7"
const url = "https://pokeapi.co/api/v2/pokemon/7";
// use first url as a backup only

fetch(url)
  .then(res => {
    console.log("success!", res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });