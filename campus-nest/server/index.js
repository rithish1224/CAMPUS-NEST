const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Campus Nest API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
