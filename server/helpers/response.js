const utility = require('../utility')
const { responseMapper } = require('../constants')



exports.send = async function (responseData, res) {
    utility.logMessage(`sending response..`)
    utility.logMessage(responseData)
    //res.header.add('Content-Range','bytes : 0-9/*')
    //res.set('Access-Control-Expose-Headers', 'Content-Range')
   // res.setHeader('Content-Range', `bytes ${0}-${9}/${responseData.length}`);

    res.send(responseData )
}

exports.exception = async function (exception, res) {
    if (exception.code) {
        utility.logMessage(`sending response..`)
        utility.logMessage(exception)
       return res.send(exception)
    }
    utility.logException(exception)
    return res.send(responseMapper.exception(exception.message))
}