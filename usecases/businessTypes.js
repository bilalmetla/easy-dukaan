



const {
    isValid,
} = require('../validations/businessTypes');

const BUSINESS_TYPES = 'businesstypes'


exports.getAll = async function (db) {
    return await db.find(BUSINESS_TYPES)

    
}

exports.create = async function (type, db) {
    type.isActive = 1
    isValid(type)
    return await db.insert(BUSINESS_TYPES, type)
}