const { create, getUserByUserEmail } = require('./user.service')
const { hashSync, genSaltSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

module.exports = {
  createUser: (req, res) => {
    const body = req.body
    const salt = genSaltSync(5)
    body.password = hashSync(body.password, salt)
    create(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          success: 0,
          message: 'db connection error',
        })
      }
    })
  },

  login: (req, res) => {
    const body = req.body
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err)
      }
      if (!results) {
        return res.json({
          success: 0,
          data: 'Invalid email or password',
        })
      }

      const result = compareSync(body.password, results.password)
      if (result) {
        results.password = undefined
        const jsontoken = sign({ result: results }, process.env.JWT, {
          expiresIn: '1h',
        })
        return res.json({
          success: 1,
          message: 'login successfully',
          token: jsontoken,
        })
      } else {
        return res.json({
          success: 0,
          data: 'invalid password or email',
        })
      }
    })
  },
}
