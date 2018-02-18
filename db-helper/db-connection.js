var MongoClient = require('mongodb').MongoClient;

var mlabUrl = 'mongodb://mayank:Admin123!@ds239638.mlab.com:39638/agreements';

function connectDb() {
    return new Promise(function(resolve, reject) {
        MongoClient.connect(mlabUrl, function (error, db) {
            if (error) {
                reject(error);
            }
        
            resolve(db);
        });
    });    
}

module.exports = connectDb;