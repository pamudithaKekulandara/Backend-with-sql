const pool = require('../../config/db')

module.exports = {
    
    create: (data, callBack) => {

        

        pool.query(
          `insert into user (firstname,lastname,gender,email,pNo,password)
            values(?,?,?,?,?,?)`,

          [
            data.firstname,
            data.lastname,
            data.gender,
            data.email,
            data.pNo,
            data.password
          ],

          (error, results, fields) => {
            if (error) {
              callBack(error)
            }
            return callBack(null, results)
          }
        )
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user where email=?`,
      [email],
      (error, results) => {
        if (error) {
          callBack(error)
        }

        return callBack(null, results[0]);
      }
    )
  }

}