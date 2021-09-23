

const { activationCode } = require('../utility')
const { codeLength } = require('../conf')
const {
    isActivationValid,
    isActivationVerifyValid
} = require('../validations/userSchema');
const { responseMapper } = require('../constants');

const USERS = 'users'
const ACTIVATIONS = 'activations'



exports.activation = async function ({ mobileNumber }, db) {
    isActivationValid({mobileNumber})
    let record = {
        mobileNumber,
        smsCode: activationCode(codeLength),
        emailCode: activationCode(codeLength),
        createdDate: new Date(),
        tried: 0,
    }
    
    //send sms and email according to configuration
    return await db.insert(ACTIVATIONS, record)
}


exports.activationVerify = async function (data, db) {
    isActivationVerifyValid(data)
    let result = await getActivaton(data, db); //todo update the tries param if not success.
    await db.remove(ACTIVATIONS, { _id: result._id })
    await isUserAlreadyExists (data.mobileNumber, db)
    return responseMapper.mobile_verified

};

async function isUserAlreadyExists(mobileNumber, db) { 
    const result = await db.findOne(USERS, { mobileNumber: mobileNumber })
    if (result && result._id) {
        throw {
            ...responseMapper.user_already_exists,
            ...result
        }
    }
    return false
}

async function getActivaton(data, db) {
    let where = {
        $and:[
            { mobileNumber: data.mobileNumber },
            {smsCode: data.code}
        ]                
    }
    const result = await db.findOne(ACTIVATIONS, where)
    if (!result) {
        throw responseMapper.activation_fialed
    }
    return result
}