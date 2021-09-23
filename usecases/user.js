

const { activationCode } = require('../utility')
const { codeLength } = require('../conf')
const {
    isActivationValid,
    isActivationVerifyValid,
    isUserValid,
} = require('../validations/userSchema');
const { responseMapper } = require('../constants');

const USERS = 'users'
const ACTIVATIONS = 'activations'



exports.getForLogin = async function ({ userName, password }, db) {
    let where = { $and: [{ "userName": userName }, { "password": password }] }
    return await db.find(USERS, where)
};

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
    let where = {
        $and:[
            { mobileNumber: data.mobileNumber },
            {smsCode: data.code}
        ]                
    }
    const result = await db.findOne(ACTIVATIONS, where)
    isActivatonFound(result) //todo update the tries param if not success.
    return responseMapper.mobile_verified

};

function isActivatonFound(result) {
    if (!result) {
        throw responseMapper.activation_fialed
    }
}