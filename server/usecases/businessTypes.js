



const {
    isValid,
} = require('../validations/businessTypes');

const BUSINESS_TYPES = 'businesstypes'


exports.getAllActive = async function (db) {
    let where = {
        isActive: 1
    }
    return await db.find(BUSINESS_TYPES, where)

    
}

exports.create = async function (type, db) {
    type.isActive = 1
    isValid(type)
    return await db.insert(BUSINESS_TYPES, type)
}