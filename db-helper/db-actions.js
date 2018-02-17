var MongoClient = require('mongodb').MongoClient;

var connectDb = require('./db-connection');

// const mongoUrl = 'mongodb://localhost:27017';
var mlabUrl = 'mongodb://mayank:Admin123!@ds239638.mlab.com:39638/agreements';

// saving agreement in database.
const saveAgreement = (values) => {
    MongoClient.connect(mlabUrl, function (error, db) {
        if (error) {
            console.error(error);
            return;
        }

        const collection = db.collection('agreements');

        collection.insert(values, (error, result) => {
            if (error) {
                console.error(error);
                return;
            }

            console.log('Agreement created successfully.')
            db.close();
            return result;
        });
    })
}

// updating agreement in database.
const updateAgreement = (values) => {
    const {
        _id,
        name,
        startDate,
        endDate,
        value,
        status
    } = values;

    const db = connectDb();
    const collection = db.collection('agreements');

    collection.updateOne({
        _id
    }, {
        $set: {
            name,
            startDate,
            endDate,
            value,
            status
        }
    }, (err, result) => {

        console.log('Updated agreements');
        db.close();
        return result;
    });
}

// getting all the agreements from database.
const getAllAgreement = (values) => {
    connectDb().then(db => {
        const collection = db.collection('agreements');

        collection.find({}).toArray((err, result) => {
            console.log('Found the following agreements');                        
            return result;
        });
    }).catch(error => console.error(error));
}

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