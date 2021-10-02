

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index')

let should = chai.should();
const fs = require('fs');


chai.use(chaiHttp);
const LOG_FILE = `${__basedir}/test.logs`



exports.sendRequest =  async function (url, data) {
    await fs.promises.appendFile(LOG_FILE, `\n---------------------\n\n${url} POST\n ${JSON.stringify(data)} \n\n`)
   return await chai.request(server)
         .post(url)
         .send(data)
 };

exports.sendGetRequest = async function (url) {
    await fs.promises.appendFile(LOG_FILE, `\n---------------------\n\n${url} GET\n`)
   return await chai.request(server)
         .get(url)
 };
 
 exports.validateResponse = async function (res) {
   res.should.have.status(200);  
   let result = JSON.parse(res.text);
   await fs.promises.appendFile(LOG_FILE, `response \n ${JSON.stringify(result)}`)
   result.should.be.a('object');
   return result
 };
 
 exports.validateSuccessResponse = async function (res) {
   
   res.should.have.status(200);  
   let result = JSON.parse(res.text);
   await fs.promises.appendFile(LOG_FILE, `response \n ${JSON.stringify(result)}`)
   result.should.be.a('object');
   result.should.have.property('code').eql('2001');
   result.should.have.property('message');
   return result
}
 
exports.validateCreateResponse = async function (res) {
   
    res.should.have.status(200);  
    let result = JSON.parse(res.text);
    await fs.promises.appendFile(LOG_FILE, `response \n ${JSON.stringify(result)}`)
    result.should.be.a('object');
    result.should.have.property('code').eql('2001');
    result.should.have.property('message');
    result.should.have.property('id');
    return result
  }

exports.validateGetResponse = async function (res) {
   
    res.should.have.status(200);  
    let result = JSON.parse(res.text);
    await fs.promises.appendFile(LOG_FILE, `response \n ${JSON.stringify(result)}`)
    result.should.be.a('object');
    result.should.have.property('code').eql('2001');
    result.should.have.property('message');
    result.should.have.property('list');
    return result
  }