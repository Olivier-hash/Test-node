const fs = require('fs');

const moreContent = '\nAppended this line using appendFile and callback.';

fs.appendFile('source.txt', moreContent, (err) => {
  if (err) return console.error('Error appending to file:', err);
  console.log('Content appended successfully.');
});
