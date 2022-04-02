"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
// console.log({models});
      Reservation.belongsTo(models.Hotel, {
        foreignKey:'hotel_id'
      }),
      Reservation.belongsTo(models.Room, {
        foreignKey:'room_id'
      }),
      Reservation.belongsTo(models.Bill, {
        foreignKey:'bill_id'
      })
    }
  }
  Reservation.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please provide user id",
          },
        },
      },

      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please provide room id",
          },
        },
      },

      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please provide hotel id",
          },
        },
      },

      bill_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please provide bill id",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Reservation",
      
    }
  );
  return Reservation;
};
