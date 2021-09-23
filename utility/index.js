


const constants = require('../constants')



exports.validateNumberOnly = function (value) {
    return isNaN(value)?'':value
}

exports.validateDateFormat = function (value) {
    let date = value.split('-')
    if (date[0] > 31 || date[0] < 1) {
        console.log('date day is not correct.')
        return ''
    }
    if (date[1] > 12 || date[1] < 1) {
        console.log('date month is not correct.')
        return ''
    }
    if (date[2] < 1000 || date[2].length != 4) {
        console.log('date year is not correct.')
        return ''
    }
    return value
};


exports.formatDateDisplay = function (record, property) {
    
    let date = new Date(record[property])
    let month = date.getMonth() + 1
    month = month < 10 ? "0" + month : month

    let day = date.getDate()
    day = day < 10 ? "0" + day : day

    record[property] =  `${date.getFullYear()}-${month}-${day}`
}

exports.formatDatePrint = function (record, property) {
    
    date = new Date(record[property])
    let month = date.getMonth() + 1
    month = month < 10 ? "0" + month : month

    let day = date.getDate()
    day = day < 10 ? "0" + day : day

    record[property] = `${day}-${month}-${date.getFullYear()}`
}

exports.logMessage = function (message) {
    if (typeof message === 'object') {
        console.log(JSON.stringify(message))
    }
    else {
        console.log(message)    
    }
    
}

exports.logException = function (exception) {
   
    console.log(exception.message, exception)  
    
};

exports.mapToClientResponse = function (result) {
    if (!result) {
        return  
    }  
     if (result && result[0]) {
        result.map(item => {
            item.id = item._id;
            delete item._id;
            delete item.password;
            delete item.pin;
            return item;
        });
    }
    else {
        if ( result._id) {
            result.id = result._id
            delete result._id
            delete item.password;
            delete item.pin;
        }
        
     }
    
    
};


exports.is = {
    array: x => Object.prototype.toString.call(x) === IS_ARRAY_PROTO || Array.isArray(x),
    object: (x) => {
      if (Object.prototype.toString.call(x) === IS_OBJECT_PROTO) {
        return true;
      }
      if (x === null || x === undefined) {
        return false;
      }
      const prototype = Object.getPrototypeOf(x);
      return prototype === null || prototype === Object.prototype;
    },
};
  
 exports.activationCode = function(length) {
    var text = "";
    var possible = "123456789";
    for (var i = 0; i < length; i++) {
      var sup = Math.floor(Math.random() * possible.length);
      text += i > 0 && sup == i ? "0" : possible.charAt(sup);
    }
    return Number(text);
  }