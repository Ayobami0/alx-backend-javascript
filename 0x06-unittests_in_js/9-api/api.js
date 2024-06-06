const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
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
})
