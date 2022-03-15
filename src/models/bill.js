'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bill.init({

    user_id : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter user id",
        },
      },
    },


    bill_data : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter your bill details",
        },
      },
    },

    bill_amount : {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please enter bill amount",
        },
      },
    },


    bill_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};