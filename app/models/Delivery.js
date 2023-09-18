const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Delivery = sequelize.define('delivery', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    remetente: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    destinatario: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    frete: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
}, {
    freezeTableName: true,
});

module.exports = Delivery;
