const fs = require('fs');

const content = 'This is a new file created using writeFile and callback.';

fs.writeFile('newfile.txt', content, (err) => {
  if (err) return console.error('Error writing file:', err);
  console.log('File written successfully.');
});
