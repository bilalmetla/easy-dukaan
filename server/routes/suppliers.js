
const supliersController = require('../controllers/supliers');


module.exports = (Router) => {
    Router.get('/suppliers/:businessType',  supliersController.getByBusinessType)
   
}