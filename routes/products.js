var express = require('express');
var router = express.Router();

const sequelize = require('../db/models/index.js').sequelize;
var initModels = require("../db/models/init-models");
var models = initModels(sequelize); 

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Products.findAll({ 
    attributes: { exclude: ["updatedAt"] }
  })
    .then(products => {
      res.send(products)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
