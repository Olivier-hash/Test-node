import { emojis } from './emojiList.js';

function getRandomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

console.log("Today's emoji is:", getRandomEmoji());
