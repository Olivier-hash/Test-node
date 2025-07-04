import { quotes } from './quotes.js';

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

console.log("Quote of the day:", getRandomQuote());
