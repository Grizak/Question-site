const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3429;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
