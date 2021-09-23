
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
    mobile_verified: {
        code: '2001',
        message:'Mobile Number Is Verified!'
    },
    activation_fialed: {
        code: '4001',
        message:'Activation Failed!'
    },
    
}