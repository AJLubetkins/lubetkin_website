const fs = require('fs');
const path = require('path');

const directoryPath = './'; // Replace with the path to your directory
const outputJsFile = 'client_logo_filenames.js';

// Read the filenames in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }


      // Filter files based on allowed extensions
  const allowedExtensions = ['.jpg', '.jpeg', '.svg', '.png', '.webp'];
  const filteredFiles = files.filter((file) =>
    allowedExtensions.some((ext) => file.toLowerCase().endsWith(ext))
  );

  // Create JavaScript content with an exported array of filenames
  const jsContent = `module.exports = ${JSON.stringify(filteredFiles, null, 2)};`;

  // Write the JavaScript file
  fs.writeFile(outputJsFile, jsContent, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing JavaScript file:', writeErr);
    } else {
      console.log(`File names have been written to ${outputJsFile}`);
    }
  });
});
