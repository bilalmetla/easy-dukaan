
const businessController = require('../controllers/business');


module.exports = (Router) => {
    Router.get('/businesses/types',  businessController.getBusinessTypes)
    Router.post('/businesses/types',  businessController.createBusinessTypes)
   
}