const sequelize = require('../database');
const { DataTypes } = require('sequelize');

const Invoice = sequelize.define('invoice', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    delivery_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    invoice_number: {
        type: DataTypes.TEXT,
    },
}, {
    freezeTableName: true,
});

module.exports = Invoice;
