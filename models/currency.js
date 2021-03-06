"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Currency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return {
        ...this.get(),
        currencyId: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      };
    }
  }
  Currency.init(
    {
      name_kh: DataTypes.STRING,
      name_en: DataTypes.STRING,
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      sequelize,
      modelName: "Currency",
    }
  );
  return Currency;
};
