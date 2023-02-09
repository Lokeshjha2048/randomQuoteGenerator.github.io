const quotes = [
    {
      text: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln"
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    }
  ];
  
  const quoteText = document.getElementById("text");
  const quoteAuthor = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");
  
  newQuoteButton.addEventListener("click", displayNewQuote);
  
  function displayNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[randomIndex].text;
    quoteAuthor.innerHTML = quotes[randomIndex].author;
}

displayNewQuote();