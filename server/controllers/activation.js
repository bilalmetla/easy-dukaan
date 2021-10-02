

const response = require('../helpers/response')
const User = require('../usecases/activation')
const db = require('../db')
const utility = require('../utility');
const { responseMapper } = require('../constants')
const { isdevInstance } = require('../conf') 



exports.activationCreate = async function (req, res, next) {
    try {
        let {mobileNumber} = req.body.payload
        const result = await User.activation({ mobileNumber }, db)
        if (isdevInstance) {
            
            return response.send({...responseMapper.created, smsCode: result.smsCode}, res)
        }
        return response.send(responseMapper.created, res)

    } catch (e) {
        response.exception(e, res)
     }
}

exports.activationVerify = async function (req, res, next) {
    try {
        let data = req.body.payload
        let result = await User.activationVerify(data, db)
        utility.mapToClientResponse(result)
        return response.send(result, res)

    } catch (e) {
        response.exception(e, res)
     }
}