const fs = require('fs');

fs.rename('source.txt', 'renamed_source.txt', (err) => {
  if (err) return console.error('Error renaming file:', err);
  console.log('File renamed successfully.');
});
