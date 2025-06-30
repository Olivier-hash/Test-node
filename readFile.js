const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) return console.error('Error reading file:', err);
  console.log('Read from file:', data);
});
