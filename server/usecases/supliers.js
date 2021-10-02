

const USERS = 'users';


exports.getByBusinessType = async function ({ businessType }, db) {

    let where = {
        $and: [
            { businessType: { $in: [businessType] } },
            {isSupplier: '1'}
        ]
        
    }
    return await db.find(USERS, where)


}