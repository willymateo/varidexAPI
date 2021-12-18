var DataTypes = require("sequelize").DataTypes;
var _Customers = require("./Customers");
var _Orders = require("./Orders");
var _Orders_details = require("./Orders_details");
var _Products = require("./Products");
var _SequelizeMeta = require("./SequelizeMeta");

function initModels(sequelize) {
  var Customers = _Customers(sequelize, DataTypes);
  var Orders = _Orders(sequelize, DataTypes);
  var Orders_details = _Orders_details(sequelize, DataTypes);
  var Products = _Products(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);

  Orders.belongsTo(Customers, { as: "customer", foreignKey: "customerID"});
  Customers.hasMany(Orders, { as: "Orders", foreignKey: "customerID"});
  Orders_details.belongsTo(Orders, { as: "order", foreignKey: "orderID"});
  Orders.hasMany(Orders_details, { as: "Orders_details", foreignKey: "orderID"});
  Orders_details.belongsTo(Products, { as: "product", foreignKey: "productID"});
  Products.hasMany(Orders_details, { as: "Orders_details", foreignKey: "productID"});

  return {
    Customers,
    Orders,
    Orders_details,
    Products,
    SequelizeMeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
