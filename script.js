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

  //We have a textarea named typearea and we need to check each letter in each word in the typearea to see if it matches the letter in the quote on keyup and if it does then change the background color to green else change it to red
  function checkquote() {
    var count = 0;
    var text = document.getElementById("typearea").value;
    var quoteword = quote.split("");
    var typedword = text.split("");
    var quotewordarray = [];
    for (var i = 0; i < quoteword.length; i++) {
      quotewordarray.push(quoteword[i]);
    }
    for (var i = 0; i < typedword.length; i++) {
      if (typedword[i] === quotewordarray[i]) {
        document.getElementById("typearea").style.backgroundColor = "green";
      } else {
        document.getElementById("typearea").style.backgroundColor = "red";
      }
    }
    //A word is text that is separated by a space.
    //We need to check each word in the textarea to see if it matches the word in the quote
    var quoteword = quote.split(" ");
    var typedword = text.split(" ");
    var quotewordarray = [];
    for (var i = 0; i < quoteword.length; i++) {
      quotewordarray.push(quoteword[i]);
    }
    for (var i = 0; i < typedword.length; i++) {
      if (typedword[i] === quotewordarray[i]) {
        count++;
      }
    }
    document.getElementById("wordcount").innerHTML = count;
  }
  typearea.onkeyup = checkquote;
});
