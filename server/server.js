const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const port = 8000
const app = express()

app.use(express.json())
app.use(errorHandler)
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',require("./routes/authRoute"))

app.use('/api/colleges',require("./routes/collegeRoute"))
app.use('/api/courses',require("./routes/courseRoute"))
app.use('/api/departments',require("./routes/departmentRoute"))
app.use('/api/messages',require("./routes/messageRoute"))
app.use('/api/notifications',require("./routes/notificationRoute"))
app.use('/api/schools',require("./routes/schoolRoute"))

app.listen(port,() => {
    console.log(`Server running on ${port}`)
})