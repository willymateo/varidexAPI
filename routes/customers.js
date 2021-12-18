var express = require('express');
var router = express.Router();

const sequelize = require('../db/models/index.js').sequelize;
var initModels = require("../db/models/init-models");
var models = initModels(sequelize);

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Customers.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
    .then(customers => {
      res.send(customers)
    })
    .catch(error => res.status(400).send(error))
});

router.get('/:customerID', function(req, res, next) {
  models.Orders.findAll({
    include: [{
      model: models.Customers,
      as: "customer",
      attributes: ["name"]
    }],
    attributes: {
      exclude: ["updatedAt"]
    }
  })
    .then(customers => {
      res.send(customers)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;
