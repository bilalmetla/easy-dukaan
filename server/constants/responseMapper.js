
module.exports = {
    exception: (message) => {
        return {
            code: '5000',
            message: message
        }
    },
    created: {
        code: '2001',
        message: 'Record Created Success!',
    },
    get: {
        code: '2001',
        message: 'Record Received Success!',
    },
    mobile_verified: {
        code: '2001',
        message:'Mobile Number Is Verified!'
    },
    user_already_exists: {
        code: '2002',
        message:'User Already Exists!'
    },
    activation_fialed: {
        code: '4001',
        message:'Activation Failed!'
    },
    
}