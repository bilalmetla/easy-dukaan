

const response = require('../helpers/response')
const User = require('../usecases/user')
const db = require('../db')
const utility = require('../utility');
const { responseMapper } = require('../constants')


exports.login = async function (req, res, next) {
   try {

       let {userName, password} = req.body
       let unit = await unitLogin({ userName, password })
       if (unit) {
            req.session.user = unit;
            return response.send(unit, res)
       }

       let user = await userLogin({ userName, password })
       if (user) {
           req.session.user = user;
            return response.send(user, res)
        }

      return response.send({ errorMessage: "Login Failed!" }, res)
      
   } catch (e) {
      response.exception(e, res)
   }
};

const unitLogin = async function ({ userName, password }) {
    let unit = await Unit.getForLogin({ userName, password }, db);
    if (!unit || unit.length === 0) {
        return false
     }
    
     unit = unit[0]
     unit.isUnitLogin = true
    
    utility.mapToClientResponse(unit)
    return unit
};

const userLogin = async function ({ userName, password }) {
    let user = await User.getForLogin({ userName, password }, db);
    if (!user || user.length === 0) {
        return false
    }
    
    user = user[0]
    user.isAdminLogin = true
    
    utility.mapToClientResponse(user)
    return user
};

exports.activation = async function (req, res, next) {
    try {
        let {mobileNumber} = req.body.payload
        await User.activation({ mobileNumber }, db)
        return response.send(responseMapper.created, res)

    } catch (e) {
        response.exception(e, res)
     }
}

exports.activationVerify = async function (req, res, next) {
    try {
        let data = req.body.payload
        let result = await User.activationVerify(data, db)
        return response.send(result, res)

    } catch (e) {
        response.exception(e, res)
     }
}