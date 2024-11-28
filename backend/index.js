const express = require('express');
const app = express();

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

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});