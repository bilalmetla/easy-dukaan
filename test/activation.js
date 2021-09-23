
const {
  sendRequest,
  validateResponse,
  validateSuccessResponse,

} = require('./helper')

var userResults = {
    mobileNumber: "03015339780",
}


describe('Easy Dukaan', function() {
  
  
  it('/POST /users/activation', async function () {
    const request = { payload: { mobileNumber: userResults.mobileNumber } }
      let res = await sendRequest('/api/users/activation', request)
    const result = await validateSuccessResponse(res)
    userResults.smsCode = result.smsCode
    
      
  });
  
  it('/POST activation verificaton should fail', async function () {
    const request = {payload: {mobileNumber: userResults.mobileNumber, code:632563 } }
    let res = await sendRequest('/api/users/activation/verify', request)
    let result =  await validateResponse(res)
    result.should.have.property('code').eql('4001');
    result.should.have.property('message');
    
  });
  
  it('/POST activation verificaton should success', async function () {
    const request = {payload: {mobileNumber: userResults.mobileNumber, code: userResults.smsCode } }
    let res = await sendRequest('/api/users/activation/verify', request)
     await validateSuccessResponse(res)
  });

  it('/POST create user', async function () {
    const request = {
      payload: {
        name: 'Rizwan',
        businessName: 'Rizwan Kello Store',
        businessType: ['Karayna store', 'Sabzi and Fruite'],
        cnic: '123365636',
        imageUrl:'',
        addressLine: 'G11/2 street 72, islamabad',
        email: '',
        mobileNumber: userResults.mobileNumber,
        
        location: {
          type: "Point",
          coordinates: [73.075223, 33.729861]
        },

      }
    }
    let res = await sendRequest('/api/users', request)
     await validateSuccessResponse(res)
  });
  
});
