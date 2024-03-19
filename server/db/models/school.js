const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const School = sequelize.define("School",{
  code:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  }
  
})

module.exports = School