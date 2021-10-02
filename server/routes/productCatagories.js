//productCatagories



const productCatagoriesController = require('../controllers/productCatagories');


module.exports = (Router) => {
    Router.get('/products/catagories/:businessTypeId',  productCatagoriesController.getProductCatagoryByBusinessType)
    Router.post('/products/catagories',  productCatagoriesController.createProductCatagory)
   
}