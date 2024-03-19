const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const College = sequelize.define("College",{
  code:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  }
  
})

module.exports = College