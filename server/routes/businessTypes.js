
const businessController = require('../controllers/businessTypes');


module.exports = (Router) => {
    Router.get('/businesses/types',  businessController.getActiveBusinessTypes)
    Router.post('/businesses/types',  businessController.createBusinessTypes)
   
}