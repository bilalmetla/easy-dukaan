
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index')
chai.use(chaiHttp);
let should = chai.should();
const fs = require('fs');


const LOG_FILE = `${__basedir}/test.logs`

describe('Easy Dukaan', function() {
  
  
  it('/POST /users/activation', async function () {
    const request = { payload: { mobileNumber: '03015339780' } }
      let res = await sendRequest('/api/users/activation', request)
      await validateSuccessResponse(res)
      
  });
  
  it('/POST activation verificaton should fail', async function () {
    const request = {payload: {mobileNumber: '03015339780', code:632563 } }
    let res = await sendRequest('/api/users/activation/verify', request)
    let result =  await validateResponse(res)
    result.should.have.property('code').eql('4001');
    result.should.have.property('message');
    
  });
  
  it('/POST activation verificaton should success', async function () {
    const request = {payload: {mobileNumber: '03015339780', code:545883 } }
    let res = await sendRequest('/api/users/activation/verify', request)
     await validateSuccessResponse(res)
  });
  
});

const sendRequest =  async function (url, data) {
   await fs.promises.appendFile(LOG_FILE, `\n\n---------------------\n\n${url}\n ${JSON.stringify(data)} \n`)
  return await chai.request(server)
        .post(url)
        .send(data)
};

const validateResponse = async function (res) {
  res.should.have.status(200);  
  let result = JSON.parse(res.text);
  await fs.promises.appendFile(LOG_FILE, `response \n ${JSON.stringify(result)}`)
  result.should.be.a('object');
  return result
};

const validateSuccessResponse = async function (res) {
  
  res.should.have.status(200);  
  let result = JSON.parse(res.text);
  await fs.promises.appendFile(LOG_FILE, `\n response \n ${JSON.stringify(result)}`)
  result.should.be.a('object');
  result.should.have.property('code').eql('2001');
  result.should.have.property('message');
  return result
}