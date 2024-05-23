// set up a basic Express server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Wave');
});

app.listen(port, () => {
    console.log(`Wave is now on http://localhost:${port}`);
  });


