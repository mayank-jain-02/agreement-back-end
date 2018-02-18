var co = require('co');
var MongoClient = require('mongodb').MongoClient;

var connectDb = require('./db-connection');
var mlabUrl = 'mongodb://mayank:Admin123!@ds239638.mlab.com:39638/agreements';

// saving agreement in database.
const saveAgreement = co.wrap(function* (values) {
    const db = yield connectDb();
    const response = yield db.collection('agreements').insert(values);

    return response;
});

// updating agreement in database.
const updateAgreement = co.wrap(function* (values) {
    const {
        _id,
        name,
        startDate,
        endDate,
        value,
        status
    } = values;

    console.log(values);

    const db = yield connectDb();
    const collection = yield db.collection('agreements')
        .updateOne({
            name: 'rent agreement updated'
        }, {
            $set: {
                name,
                startDate,
                endDate,
                value,
                status
            }
        });
});

// getting all the agreements from database.
const getAllAgreement = co.wrap(function* () {
    const db = yield connectDb();
    const res = yield db.collection('agreements').find({}).toArray();

    return res;
});

// getting all the agreements from database.
const getAgreement = (id) => {
    const db = connectDb();
    const collection = db.collection('agreements');

    collection.find({
        _id: id
    }).toArray((err, result) => {
        console.log('Agreement found');
        db.close();
        return result;
    });
}

// deleting an agreement from database
const deleteAgreement = (id) => {
    const db = connectDb();
    const collection = db.collection('agreements');

    collection.deleteOne({
        _id: id
    }, (err, result) => {
        console.log('Agreement deleted');
        return true;
    })
}

module.exports = {
    saveAgreement,
    updateAgreement,
    getAgreement,
    getAllAgreement,
    deleteAgreement
}