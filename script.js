const api_url = "https://api.quotable.io/random";

const input = document.getElementById("textinput");
const quote = document.getElementById("displayquote");

function getRandomQuote() {
  return fetch(api_url)
    .then((response) => response.json())
    .then((data) => data.content);
}

getRandomQuote().then((quote) => {
  document.getElementById("displayquote").innerHTML = quote;

  //We have a textarea named typearea and we need to check each letter in each word in the typearea to see if it matches the letter in the quote on keyup and if it does then change the background color to green else change it to red
  function checkquote() {
    if (document.getElementById("typearea").value.length === 1) {
      test();
    }
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
        document.getElementById("wrong").innerHTML =
          "You messed up letter " + quoteword[i];
      }
    }

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
    if (count === quotewordarray.length) {
      finished();
    }
  }
  typearea.onkeyup = checkquote;
  function test() {
    var start = new Date().getTime();
    var interval = setInterval(function () {
      var now = new Date().getTime();
      var difference = now - start;
      var seconds = Math.floor(difference / 1000);
      document.getElementById("timerid").innerHTML = seconds;
    }, 1000);
  }
  function finished() {
    var seconds = document.getElementById("timerid").innerHTML;
    var count = document.getElementById("wordcount").innerHTML;
    var wpm = (count / seconds) * 60;
    document.getElementById("wpm").innerHTML = "WPM " + wpm;
  }
});
