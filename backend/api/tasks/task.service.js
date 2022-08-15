const pool = require('../../config/db')

module.exports = {
  //insert data into the database
    create: (data, callBack) => {
        
        
    pool.query(
      `insert into task(task,date,time,reminder)
            values(?,?,?,?)`,

      [data.task, data.date, data.time, data.reminder],
      (err, result) => {
        if (err) {
          callBack(err)
        }
        return callBack(null, result)
      }
    )
  },

  //get Tasks by id
}
