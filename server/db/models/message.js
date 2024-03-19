const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const Message = sequelize.define("Message",{
  message:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  file:{
    type:DataTypes.STRING,
    allowNull:false,
  }
})

module.exports = Message