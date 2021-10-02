const {
    sendRequest,
    sendGetRequest,
    validateCreateResponse,
    validateGetResponse
  
  } = require('./helper')

const productData = {

} 

describe('Easy Dukaan - Products', function () {
    this.timeout(20000);

    it('/POST /products', async function () {
        const request = {
            payload: productData
        }
          let res = await sendRequest('/api/products', request)
         await validateCreateResponse(res)

    });
    
})