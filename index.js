// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Welcome to this page!');
});

// Start the server only if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

