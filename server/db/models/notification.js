const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const Notification = sequelize.define("Notification",{
  message:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  file:{
    type:DataTypes.STRING,
    allowNull:false,
  }
})

module.exports = Notification