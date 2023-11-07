const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'portfolio.csv'; // Replace with your CSV file path
const outputFile = 'portfolioData.js';
const portfolioItems = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    portfolioItems.push({
      id: row.id,
      title: row.title,
      url: row.url,
    });
  })
  .on('end', () => {
    // Create the JavaScript file with the portfolio data
    const jsCode = `const portfolioItems = ${JSON.stringify(portfolioItems, null, 2)};\n\nexport default portfolioItems;`;

    fs.writeFileSync(outputFile, jsCode);

    console.log('Conversion completed. Data saved to portfolioData.js');
  });
