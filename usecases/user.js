


const {
    isUserValid,
} = require('../validations/userSchema');

const USERS = 'users'


exports.create = async function (user, db) {
        isUserValid(user);
        const record = {
            ...user,
            createdDate: new Date(),
        }

        return await db.insert(USERS, record)

    
}