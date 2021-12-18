var express = require('express');
var router = express.Router();

const sequelize = require('../db/models/index.js').sequelize;
var initModels = require("../db/models/init-models");
var models = initModels(sequelize); 

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Orders.findAll({ 
    attributes: { exclude: ["updatedAt"] }
  })
    .then(orders => {
      res.send(orders)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
