const express = require('express');
const app = express();


  app.get('/math/rectangle/:w/:h', (req, res) => {
    const width = parseFloat(req.params.w);
    const height = parseFloat(req.params.h); 

   
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        return res.status(400).json({ error: 'Width and Height must be positive numbers.' });
    }

    const area = width * height;
    const perimeter = 2 * (width + height); 

    res.json({
        area: area.toFixed(2),
        perimeter: perimeter.toFixed(2)
    });
  });

  



    // Endpoint do obliczania pola i obwodu koła
    app.get('/math/circle/:r', (req, res) => {
      const radius = parseFloat(req.params.r); 
      // Sprawdzenie poprawności parametru
      if (isNaN(radius) || radius <= 0) {
          return res.status(400).json({ error: 'Invalid radius. Please provide a positive number.' });
      }

      // Obliczanie pola i obwodu
      const area = Math.PI * Math.pow(radius, 2); // πr^2
      const circumference = 2 * Math.PI * radius; // 2πr

     
      res.json({
          area: area.toFixed(2), 
          circumference: circumference.toFixed(2)
      });
    });

    
      
  app.get('/math/power/:base/:exponent', (req, res) => {
    const base = parseFloat(req.params.base);      
    const exponent = parseFloat(req.params.exponent); 
    const includeRoot = req.query.root === 'true';

    // Sprawdzenie poprawności parametrów
    if (isNaN(base) || isNaN(exponent)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers for base and exponent.' });
    }

    const result = Math.pow(base, exponent);

    // Tworzenie odpowiedzi
    const response = { result: result };

    // Dodawanie pierwiastka kwadratowego, jeśli wymagane
    if (includeRoot) {
        response.root = Math.sqrt(base);
    }

    res.json(response);   
  });
 



    

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

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

//endpoint do obliczenia kola

