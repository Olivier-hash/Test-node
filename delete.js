const fs = require('fs');

fs.unlink('newfile.txt', (err) => {
  if (err) return console.error('Error deleting file:', err);
  console.log('File deleted successfully.');
});
