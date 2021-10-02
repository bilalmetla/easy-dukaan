
const userController = require('../controllers/user');
const activationController = require('../controllers/activation');


module.exports = (Router) => {
    Router.post('/users',  userController.userCreate)
    Router.post('/users/activation',  activationController.activationCreate)
    Router.post('/users/activation/verify',  activationController.activationVerify)
}