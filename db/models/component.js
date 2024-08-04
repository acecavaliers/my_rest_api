'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../../config/database');
const Component = sequelize.define('component', {
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
      notNull:{ msg: 'Component name cannot be null',},
      notEmpty:{ msg: 'Component name cannot be empty',}
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull:true,
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
  modelName:'component'
});
Component.associate = models => {
  Component.belongsToMany(models.Product, {
    through: models.ProductComponent,
    foreignKey: 'componentId',
    otherKey: 'productId'
  });
  Component.belongsToMany(models.Supplier, {
    through: models.ComponentSupplier,
    foreignKey: 'componentId',
    otherKey: 'supplierId'
  });
};
module.exports=Component;