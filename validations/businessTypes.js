

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

const record = joi.object().keys({ 
    businessType: stringValueRequired,
    isActive: numberValueRequired,  
  
})
  
exports.isValid = function (dataToValidate) {
  const result = record.validate(dataToValidate);
  if (result.error) {
      utility.logMessage(result)
      throw result.error
  }
  return
};