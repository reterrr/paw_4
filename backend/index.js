const express = require('express');
const cors = require('cors');

const db = require('./db');
const app = express();

app.use(cors());

function getRandomJoke(category) {
    const jokes = db[category];
    if (!jokes) return null; // Return null if the category doesn't exist
    return jokes[Math.floor(Math.random() * jokes.length)];
}

// define endpoint for exercise 4 here
app.get('/hello/name', (req, res) => {
  const { first, last } = req.query;

  // check for required parameters
  if (!first || !last) {
    const missingParams = [];
    if (!first) {
      missingParams.push('first');
    }
    if (!last) {
      missingParams.push('last');
    }
    const errorMessage = `Missing Required GET parameters: ${missingParams.join(', ')}`;
    return res.status(400).send(errorMessage);
  }

  // send greeting
  const message = `Hello ${first} ${last}`;
  res.type('text').send(message);
});

app.get('/math/circle/:r', (req, res) => {
    const radius = parseFloat(req.params.r);

    if (isNaN(radius) || radius <= 0) {
        return res.status(400).json({ error: 'Radius must be a positive number.' });
    }

    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;

    res.json({
        area: area.toFixed(2),
        circumference: circumference.toFixed(2)
    });
});

app.get('/math/rectangle/:w/:h', (req, res) => {
    const width = parseFloat(req.params.w);
    const height = parseFloat(req.params.h); // Fixed typo

    // Validate parameters
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        return res.status(400).json({ error: 'Width and Height must be positive numbers.' });
    }

    const area = width * height;
    const perimeter = 2 * (width + height); // Fixed typo in variable name

    res.json({
        area: area.toFixed(2),
        perimeter: perimeter.toFixed(2)
    });
});

app.get('/math/power/:base/:exponent', (req, res) => {
    const base = parseFloat(req.params.base);
    const exponent = parseFloat(req.params.exponent);
    const includeRoot = req.query.root === 'true';

    // Walidacja danych wejściowych
    if (isNaN(base) || isNaN(exponent)) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    // Obliczanie potęgi
    const result = Math.pow(base, exponent);

    // Tworzenie odpowiedzi
    const response = { result: result };

    // Dodawanie pierwiastka kwadratowego, jeśli wymagane
    if (includeRoot) {
        response.root = Math.sqrt(base);
    }

    res.json(response);
});

app.get('/jokebook/categories', (req, res) => {
    res.json(db.categories);
});

app.get('/jokebook/joke/:category', (req, res) => {
    const { category } = req.params;

    // Fetch a random joke for the category
    const joke = getRandomJoke(category);

    if (!joke) {
        // If the category is invalid
        return res.status(400).json({ error: `no jokes for category ${category}` });
    }

    // Respond with the random joke
    res.json(joke);
});


// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

