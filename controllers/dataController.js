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

    }
}
