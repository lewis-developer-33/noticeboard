const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const Course = sequelize.define("Course",{
  code:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },  
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  }
  
})

module.exports = Course