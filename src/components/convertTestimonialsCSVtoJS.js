const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'testimonials.csv'; // Replace with your CSV file path
const outputFile = 'testimonialsData.js';
const testimonials = [];

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    testimonials.push({
      id: parseInt(row.id),
      name: row.name,
      position: row.position,
      quote: row.quote,
    });
  })
  .on('end', () => {
    const jsCode = `const testimonials = ${JSON.stringify(testimonials, null, 2)};\n\nexport default testimonials;`;

    fs.writeFileSync(outputFile, jsCode);

    console.log('Conversion completed. Data saved to testimonialsData.js');
  });
