const api_url = "https://api.quotable.io/random";

const input = document.getElementById("textinput");
const quote = document.getElementById("displayquote");
const timer = document.getElementById("timerid");

function getRandomQuote() {
  return fetch(api_url)
    .then((response) => response.json())
    .then((data) => data.content);
}

getRandomQuote().then((quote) => {
  document.getElementById("displayquote").innerHTML = quote;
});
