const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json('Welcome to sequelize!');
})
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
})