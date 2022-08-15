require('dotenv').config()
const express = require('express')
const cors=require('cors')
const app = express()
const taskRouter = require('./api/tasks/task.routes')
const userRouter = require('./api/user/user.routes')

app.use(express.json())
app.use(cors())
app.use('/api/task', taskRouter)
app.use('/api/user',userRouter)

const port = process.env.PORT
app.listen(port, () => {
  console.log('server up and running on Port', port)
})
