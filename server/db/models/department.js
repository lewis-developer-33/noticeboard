const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const Department = sequelize.define("Department",{
  code:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  }
  
})

module.exports = Department