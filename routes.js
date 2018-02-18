var express = require('express');
var router = express.Router();

var dbActions = require('./db-helper/db-actions');

const agreements = [{
    "name": "rent agreement",
    "startDate": "17-02-2018",
    "endDate": "17-03-2018",
    "value": "7000",
    "status": "Active"
},
{
    "name": "shop agreement",
    "startDate": "17-03-2018",
    "endDate": "17-04-2018",
    "value": "10000",
    "status": "Active"
},
{
    "name": "office agreement",
    "startDate": "17-02-2018",
    "endDate": "17-03-2018",
    "value": "12000",
    "status": "Active"
}, {
    "name": "school agreement",
    "startDate": "17-01-2018",
    "endDate": "17-05-2018",
    "value": "8000",
    "status": "Active"
},
{
    "name": "home loan agreement",
    "startDate": "17-01-2018",
    "endDate": "16-02-2018",
    "value": "15000",
    "status": "Active"
}
];

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
router.delete('/delete-agreement', function(req, res, next) {
    const { body } = req;

    res.json({
        message: 'Agreement deleted successfully'    
    })
});

// advance search of agreements
router.post('/advance-search', function(req, res, next) {
    res.json(agreements);
});

module.exports = router;