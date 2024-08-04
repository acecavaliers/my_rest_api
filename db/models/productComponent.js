'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../../config/database');
const ProductComponent = sequelize.define('productComponent', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product', // Name of the target model
      key: 'id',
    }
  },
  componentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'component', // Name of the target model
      key: 'id',
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
},
{
  paranoid:true,
  freezeTableName:true,
  modelName:'productComponent'
});


module.exports=ProductComponent;