const express = require('express');

const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
      }
    }
  );
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (Number.isNaN(Number((id)))) {
    res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /cart/${id}</pre>
</body>
</html>`)
    return;
  }
  res.send(`Payment methods for cart ${id}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
