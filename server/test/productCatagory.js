const {
    sendRequest,
    sendGetRequest,
    validateCreateResponse,
    validateGetResponse
  
  } = require('./helper')



describe('Easy Dukaan - Product Catagories', function () { 
    this.timeout(20000);
    
    it('/GET /businesses/types', async function () {

          let res = await sendGetRequest('/api/businesses/types')
         await validateGetResponse(res)

    });

    it('/POST /products/catagories', async function () {
        const request = {
            payload: {
                catagoryName: "Tea",
                businessTypeId:"1"
            }
        }
          let res = await sendRequest('/api/products/catagories', request)
         await validateCreateResponse(res)

    });
    it('/POST /products/catagories', async function () {
        const request = {
            payload: {
                catagoryName: "Oil",
                businessTypeId:'2'
            }
        }
          let res = await sendRequest('/api/products/catagories', request)
         await validateCreateResponse(res)

    });

    it('/GET /products/catagories/:businessTypeId', async function () {

        let res = await sendGetRequest('/api/products/catagories/1')
       await validateGetResponse(res)

  });
    
})
