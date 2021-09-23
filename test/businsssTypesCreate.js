const {
    sendRequest,
    sendGetRequest,
    validateCreateResponse,
    validateGetResponse
  
  } = require('./helper')

var userResults = {
    mobileNumber: "03015339780",
}


describe('Easy Dukaan - Create Records', function () { 

    it('/POST /businesses/types', async function () {
        const request = {
            payload: {
                businessType: "General Store & Kiryana"
            }
        }
          let res = await sendRequest('/api/businesses/types', request)
         await validateCreateResponse(res)

    });
    
    it('/POST /businesses/types', async function () {
        const request = {
            payload: {
                businessType: "Medical Store & Baby Care"
            }
        }
          let res = await sendRequest('/api/businesses/types', request)
         await validateCreateResponse(res)

    });
    
    it('/POST /businesses/types', async function () {
        const request = {
            payload: {
                businessType: "Wholesalre, Depo & Chaki"
            }
        }
          let res = await sendRequest('/api/businesses/types', request)
         await validateCreateResponse(res)

    });
    
    it('/POST /businesses/types', async function () {
        const request = {
            payload: {
                businessType: "Fruite & Sabzi"
            }
        }
          let res = await sendRequest('/api/businesses/types', request)
         await validateCreateResponse(res)

    });
    
    it('/GET /businesses/types', async function () {
        const request = {
            payload: {
                businessType: "Fruite & Sabzi"
            }
        }
          let res = await sendGetRequest('/api/businesses/types')
         await validateGetResponse(res)

      });
})