





const {
    isValid,
} = require('../validations/productCategories');

const PRODUCT_CATAGORIES = 'productcategories'


exports.getByBusinessType = async function ({ businessTypeId }, db) {
    let where = {
        $and: [
            { isActive: 1 },
            {businessTypeId: businessTypeId}
        ]
        
    }
    return await db.find(PRODUCT_CATAGORIES, where)

    
}

exports.create = async function (catagory, db) {
    catagory.isActive = 1
    isValid(catagory)
    return await db.insert(PRODUCT_CATAGORIES, catagory)
}