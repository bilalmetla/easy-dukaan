

const response = require('../helpers/response')
const User = require('../usecases/user')
const db = require('../db')
const utility = require('../utility');
const { responseMapper } = require('../constants')
const { isdevInstance } = require('../conf') 



exports.userCreate = async function (req, res, next) {
    try {
 
        let user = req.body.payload
        let record = await User.create(user, db)
        
        const result = {
            ...responseMapper.created,
            ...record
        }
        utility.mapToClientResponse(result)
        return response.send(result, res)
       
    } catch (e) {
       response.exception(e, res)
    }
 };