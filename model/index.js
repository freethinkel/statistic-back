const
  mongo = require('mongoose')
  , CRUD = require('./CRUD')
  , dbOpt = {
      uName: '***'
      , pass: '***'
      // , path: 'mongodb://admin:admin123@ds247330.mlab.com:47330/heroku_xd3p58l6'
      , path: 'mongodb://admin:admin123@ds016138.mlab.com:16138/kgeu-statistic'
    }
  , schemas = {
      quests: require('./schemas/quests')(mongo)
      ,users: require('./schemas/users')(mongo)
    }
  , methods = {
      init: initConnection
      , quests: new CRUD(mongo, schemas.quests, 'quests')
      , users: new CRUD(mongo, schemas.users, 'users')
    }
  ;

function initConnection() {
  mongo.Promise = global.Promise;
  mongo.connect(dbOpt.path, {
    autoReconnect: true,
    autoIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500, 
    poolSize: 10
  });
  mongo.connection.on('connected', function () {  
    console.log('db connected...');
  }); 
  
  mongo.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
    console.log('Closing application');
    // process.exit(0);
  }); 
    
  // When the connection is disconnected
  mongo.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected'); 
    console.log('Closing application');
    // process.exit(0);
  });
}

module.exports = methods;