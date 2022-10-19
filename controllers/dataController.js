const {update} = require('../models/log')
const Log = require('../models/log')

const dataController = {
    // Index
    index(req, res, next){
        Log.find({}, (err, foundLogs) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.logs = foundLogs
                next()
            }
        })
    },
    // Destroy
    destroy(req, res, next){
        Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = deletedLog
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
        Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = updatedLog
                next()
            }
        })
    },
    // Create
    create(req, res, next){
        req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false;
        Log.create(req.body, (err, createdLog) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = createdLog
                console.log(createdLog)
                next()
            }
        })
    },
    // Edit
    // edit (req, res)
    // Show
    show(req, res, next){
        Log.findById(req.params.id, (err, foundLog) => {
            if(err){
                res.status(400).send({
                    msg: err.message,
                    output: `could not find a Log with that ID`
                })
            } else {
                res.locals.data.log = foundLog

                next()
            }
        })
    }

}
module.exports = dataController
