
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: 3000,
    isNedb: true,
    isMongodb: false,
    mongodbConfig: {
        "name": "ALAZIZ",
        "connector": "mongodb",
        "url": process.env.MONGO_URI,
        "host": "127.0.0.1",
        "port": 27017,
        "user": "",
        "password": "",
        "database": process.env.MONGO_DATABASE,
        "useNewUrlParser": false
      },
  isdevInstance: true,
    codeLength: 6,
}