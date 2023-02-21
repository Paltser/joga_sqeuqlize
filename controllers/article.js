// get connection to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');

// read model data for table respresentation
const models = require('../models')

//get all data from table
const getAllArticles = (req, res) => {
    models.Article.findAll()
        .then(articles => {
            return res.status(200).json({articles});
        })
        .catch(err => {
            return res.status(500).send(error.message)
        })
}
// show article by this slug
const getArticleBySlug = (req, res) => {
    models.Article.findOne({
        where: {
            slug: req.params.slug
        },
        include: [{
            model: models.Author,
        }],
        })
        .then(article => {
            return res.status(200).json({article});
        })
        .catch(err => {
            return res.status(500).send(err.message);
        })
}
    module.exports = {
        getAllArticles,
        getArticleBySlug
    }