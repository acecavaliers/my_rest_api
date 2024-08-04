'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../../config/database');
const Product = sequelize.define('product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{ msg: 'Product name cannot be null',},
      notEmpty:{ msg: 'Product name cannot be empty',}
    }
  },
  quantity_on_hand:{
    type: DataTypes.INTEGER,
    allowNull:false,
    validate:{
      notNull:{ msg: 'Quantity on hand cannot be null',},
      notEmpty:{ msg: 'Quantity on hand cannot be empty',}
    }

  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  deletedAt: {
    type: DataTypes.DATE
  }
},{
  paranoid:true,
  freezeTableName:true,
  modelName:'product'
});
Product.associate = models => {
  Product.belongsToMany(models.Component, {
    through: models.ProductComponent,
    foreignKey: 'productId',
    otherKey: 'componentId'
  });
};

module.exports=Product;
