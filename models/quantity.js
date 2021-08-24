"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quantity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
    }
  }
  Quantity.init(
    {
      quantity: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: "Quantity",
    }
  );
  return Quantity;
};