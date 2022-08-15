const { create } = require('./task.service')

module.exports = {
    
    createTask: (req, res) => {
        const body = req.body
        create(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message:'db connection error'
                })
            }
            return res.status(200).json({
                success: 1,
                data:results,
            })
        })
    }

}