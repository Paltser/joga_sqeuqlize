const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// Test the connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const ArticleRouter = require('./routes/article');
app.use('/', ArticleRouter);
app.use('/article', ArticleRouter);

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
})