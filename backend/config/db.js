const { createPool } = require('mysql')
require('dotenv').config({path:'./env'})

const HOST_Name = process.env.HOST
const User_name = process.env.USER
const Password = process.env.PASS
const Db=process.env.DB

const pool = createPool({
    
    host:HOST_Name,
    user:User_name,
    password:Password,
    database:Db

})

module.exports = pool;