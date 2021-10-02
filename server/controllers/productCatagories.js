
const response = require('../helpers/response')
const ProductCatagories = require('../usecases/productCatagories')
const db = require('../db')
const utility = require('../utility');
const { responseMapper } = require('../constants')
const { isdevInstance } = require('../conf');





exports.getProductCatagoryByBusinessType = async function (req, res, next) {
    try {
        let { businessTypeId } = req.params;
        let record = await ProductCatagories.getByBusinessType({businessTypeId}, db)
        
        utility.mapToClientResponse(record)
        const result = {
            ...responseMapper.get,
            list: [...record]
        }
        return response.send(result, res)
       
    } catch (e) {
       response.exception(e, res)
    }
 };


exports.createProductCatagory = async function (req, res, next) {
    try {

        const catagory = req.body.payload;
        let record = await ProductCatagories.create(catagory, db)
        utility.mapToClientResponse(record)
        
        const result = {
            ...responseMapper.created,
            ...record
        }
        return response.send(result, res)
       
    } catch (e) {
       response.exception(e, res)
    }
 };