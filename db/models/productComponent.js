'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductComponent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductComponent.init({
    productId: DataTypes.INTEGER,
    componentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductComponent',
  });
  return ProductComponent;
};