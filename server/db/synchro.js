const { sequelize } = require( "./connect");

const User = require( "./models/user");
const College = require("./models/college")
const Course = require("./models/course")
const Department = require("./models/department")
const Message = require("./models/message")
const Notification = require("./models/notification")
const School = require("./models/school")


Course.hasMany(User)
User.belongsTo(Course)

Department.hasMany(Course)
Course.belongsTo(Department)

School.hasMany(Department)
Department.belongsTo(School)

College.hasMany(School)
School.belongsTo(College)

User.hasMany(Message)
Message.belongsTo(User)

User.hasMany(Notification)
Notification.belongsTo(User)


const synchroTables = async () => {
    try {
        await sequelize.sync({alter:true})
        console.log("DB synced")
    } catch (error) {
        console.log("Sync failed",error.message)
    }
}

synchroTables()