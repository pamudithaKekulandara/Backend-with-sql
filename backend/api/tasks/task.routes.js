const router = require('express').Router()
const { createTask } = require('./task.controller')

router.post('/add', createTask)

module.exports=router