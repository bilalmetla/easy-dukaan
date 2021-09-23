
const response = require('../helpers/response')
const BusinessTypes = require('../usecases/businessTypes')
const db = require('../db')
const utility = require('../utility');
const { responseMapper } = require('../constants')
const { isdevInstance } = require('../conf');





exports.getBusinessTypes = async function (req, res, next) {
    try {
 
        let record = await BusinessTypes.getAll(db)
        
        utility.mapToClientResponse(record)
        const result = {
            ...responseMapper.get,
            list: [...record]
        }
        return response.send(result, res)
       
    } catch (e) {
       response.exception(e, res)
    }
 };


exports.createBusinessTypes = async function (req, res, next) {
    try {

        const type = req.body.payload;
        let record = await BusinessTypes.create(type, db)
        utility.mapToClientResponse(record)
        
        const result = {
            ...responseMapper.created,
            ...record
        }
        return response.send(result, res)
       
    } catch (e) {
       response.exception(e, res)
    }
 };