const router = require('express').Router();
const { createUser ,login} = require('./user.controllers')

router.post('/reg', createUser)
router.post('/login',login)

module.exports=router