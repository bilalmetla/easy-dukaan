const utility = require('../utility')
const Datastore = require('nedb');


const users = new Datastore({ filename: __basedir+'/data/users.db', autoload: true });
const businesstypes = new Datastore({ filename: __basedir+'/data/businesstypes.db', autoload: true });
const activations = new Datastore({ filename: __basedir+'/data/activations.db', autoload: true });
const products = new Datastore({ filename: __basedir+'/data/products.db', autoload: true });
const categories = new Datastore({ filename: __basedir+'/data/categories.db', autoload: true });
const subscriptions = new Datastore({ filename: __basedir+'/data/subscriptions.db', autoload: true });
const promotions = new Datastore({ filename: __basedir+'/data/promotions.db', autoload: true });

const db = {
    users,
    businesstypes,
    activations,
    products,
    categories,
    subscriptions,
    promotions,

}

const find = async (collectionName, where) => {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db[collectionName].find(where)
            .exec((err, docs) => err ? reject(err): resolve(docs))
    })
     
}

const findAndSort = async (collectionName, where, sort) => {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db[collectionName]
            .find(where)
            .sort(sort)
            .exec((err, docs) => err ? reject(err): resolve(docs))
    })
    
}

const findOne = async function (collectionName, where) {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db[collectionName].findOne(where, (err, docs) => err ? reject(err): resolve(docs))    
     })
}

const insert = async function (collectionName, record) {

    return new Promise((resolve, reject) => {
        return db[collectionName]
            .insert(record, (err, docs) => err ? reject(err) : resolve(docs))
     })
}

const update = async function (collectionName, where, record) {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    return new Promise((resolve, reject) => {
        return db[collectionName]
            .update(where, { $set: record }, {},
                (err, docs) => err ? reject(err) : resolve(docs))
    })
}


const remove = async function (collectionName, where) {
    
    utility.logMessage('final where clause..')
    utility.logMessage(where)
    
    return new Promise((resolve, reject) => {
        return db[collectionName]
            .remove(where, (err, docs) => err ? reject(err) : resolve(docs))
    })
}



module.exports = {
    find,
    findAndSort,
    findOne,
    insert,
    update,
    remove,
}
