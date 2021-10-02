const response = require('../helpers/response')
const Supliers = require('../usecases/supliers')
const db = require('../db')
const utility = require('../utility');
const { responseMapper } = require('../constants')


exports.getByBusinessType = async function (req, res, next) {
    try {
 
        let { businessType } = req.params
        let record = await Supliers.getByBusinessType({ businessType }, db)
        utility.mapToClientResponse(record)
        return response.send(record, res)
       
    } catch (e) {
       response.exception(e, res)
    }
 };