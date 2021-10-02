const joi = require('joi');

const stringValue = joi.string();
const stringValueRequired = stringValue.required();
const stringValueOptional = stringValue.allow('', null).optional();
const numberValue = joi.number();
const numberValueRequired = numberValue.required();
const numberValueOptional = numberValue.allow('', null).optional();
        
module.exports = {
    joi,
    stringValue,
    stringValueRequired,
    stringValueOptional,
    numberValue,
    numberValueRequired,
    numberValueOptional,
}