
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
    businessName: stringValueRequired,
    businessType: joi.array(),
    addressLine: stringValueRequired,
    mobileNumber: numberValueRequired,
    
    location: joi.object().keys({
      type: stringValueRequired,
      coordinates:joi.array()
    }).required(),

    email: stringValueOptional,
    imageUrl: stringValueOptional,
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