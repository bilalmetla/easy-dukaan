

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
    businessTypeId: stringValueRequired,
    catagoryName: stringValueRequired,
    isActive: numberValueRequired,  
    imageUrl: stringValueOptional,
    imageName: stringValueOptional, 
  
})
  
exports.isValid = function (dataToValidate) {
  const result = record.validate(dataToValidate);
  if (result.error) {
      utility.logMessage(result)
      throw result.error
  }
  return
};