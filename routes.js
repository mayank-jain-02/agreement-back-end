var express = require('express');
var router = express.Router();

var dbActions = require('./db-helper/db-actions');

// get an agreement.
router.get('/', function (req, res, next) {

});

// saving an agreement.
router.post('/save-agreement', function (req, res, next) {
    const { body } = req;

    dbActions.saveAgreement(body)
             .then((result) => res.json(result))
             .catch((error) => console.error(error));
});

// getting all agreements.
router.get('/get-all-agreements', function (req, res, next) {    
    dbActions.getAllAgreement()
             .then((result) => res.json(result))
             .catch((error) => console.error(error));
});

// updating an agreement.
router.put('/update-agreement', function(req, res, next) {
    const { body } = req;

    dbActions.updateAgreement(body)
             .then((result) => res.json(result))
             .catch((error) => console.error(error));             
});

// deleting an agreement.
router.delete('/delete-agreement/:name', function(req, res, next) {
    const { params: { name } } = req;    

    dbActions.deleteAgreement(name)
        .then((result) => res.json(result))
        .catch((error) => console.error(error));                 
});

// advance search of agreements
router.post('/advance-search', function(req, res, next) {
    res.json({});
});

module.exports = router;