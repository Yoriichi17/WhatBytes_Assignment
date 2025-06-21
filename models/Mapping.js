const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Patient = require('./Patient');
const Doctor = require('./Doctor');

const Mapping = sequelize.define('Mapping', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Patient,
      key: 'id'
    }
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Doctor,
      key: 'id'
    }
  }
});

Mapping.belongsTo(Patient, { foreignKey: 'patientId' });
Mapping.belongsTo(Doctor, { foreignKey: 'doctorId' });

module.exports = Mapping;
