
const userController = require('../controllers/user');


module.exports = (Router) => {
    Router.post('/users/login',  userController.login)
    Router.post('/users/activation',  userController.activation)
    Router.post('/users/activation/verify',  userController.activationVerify)
}