const express = require('express');
const app = express();

let id = new Date().getTime();

app.get('/api/cars', (req, res) => {
  const payload = {id: id, cars: ['BMW', 'Mercedes-Benz', 'Lamborghini', 'Ferrari', 'Maserati']};
  res.json(payload);
});

const port = 9000;

app.listen(port, () => {
  console.log(`Instance Started`);
});
