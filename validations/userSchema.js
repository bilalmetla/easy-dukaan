
const utility = require('../utility')
const {
  joi,
  stringValue,
  stringValueRequired,
  stringValueOptional,
  numberValue,
  numberValueRequired,
  numberValueOptional,
} = require('./joi')

const user = joi.object().keys({ 
    name: stringValueRequired,
    address: stringValueRequired,
    representitveName: stringValueRequired,
    phone: numberValueRequired,
    ntnNumber: stringValueRequired,
    ntnName: stringValueRequired,
    
    email: stringValueOptional,
    unitId: stringValueOptional,
    createdDate: stringValueOptional,
    updatedDate: stringValueOptional,
    cnic: stringValueOptional,
})
  
exports.isUserValid = function (dataToValidate) {
  const result = user.validate(dataToValidate);
  if (result.error) {
      utility.logMessage(result)
      throw result.error
  }
  return
};

const activation = joi.object().keys({ 
  mobileNumber: numberValueRequired,
});

exports.isActivationValid = function (dataToValidate) {
  const result = activation.validate(dataToValidate);
  if (result.error) {
      utility.logMessage(result)
      throw result.error
  }
  return
};

const activationVerify = joi.object().keys({ 
  mobileNumber: numberValueRequired,
  code: numberValueRequired,
});

exports.isActivationVerifyValid = function (dataToValidate) {
  const result = activationVerify.validate(dataToValidate);
  if (result.error) {
      utility.logMessage(result)
      throw result.error
  }
  return
};