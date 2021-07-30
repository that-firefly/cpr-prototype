const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line





// Routing for registration-choice.html
router.post('*/registration-choice-choice', function (req, res) {
    var regChoice = req.session.data['regChoice']
    if (regChoice == "yes"){
        res.redirect('home?obligated=yes&registered=no&paid=no')
    }
    if (regChoice == "no"){
        res.redirect('registration-choice-no')
    }
    else {
        res.redirect('registration-choice-guidance')
    }
})




// Routing for service-start-defra.html
router.post('*/route-check-defra', function (req, res) {
    var daChoice = req.session.data['daChoice']
    if (daChoice == "yes"){
        res.redirect('/v5/defra-id/login')
    }
    else {
        res.redirect('service-start-defra-check')
    }
})




// Routing for service-start-defra-check.html
router.post('*/route-check-defra-company', function (req, res) {
    var defraCheckCompanyNumber = req.session.data['defraCheckCompanyNumber']
    if (defraCheckCompanyNumber == "(001234) Burns Industries"){
        res.redirect('service-start-defra-check-yes')
    }
    else {
        res.redirect('service-start-gg')
    }
})




// Routing for service-start-gg.html
router.post('*/route-check-gg', function (req, res) {
    var ggChoice = req.session.data['ggChoice']
    if (ggChoice == "yes"){
        res.redirect('service-start-defra-create')
    }
    else {
        res.redirect('service-start-gg-create')
    }
})




// Routing for registration-check-org-audit.html
router.post('*/route-check-org-audit', function (req, res) {
    var auditChoice = req.session.data['auditChoice']
    if (auditChoice == "no"){
        res.redirect('registration-org-audit-address')
    }
    else {
        res.redirect('registration-check-org-correspondence')
    }
})




// Routing for registration-check-org-correspondence.html
router.post('*/route-check-org-correspondence', function (req, res) {
    var correspondenceChoice = req.session.data['correspondenceChoice']
    if (correspondenceChoice == "no1"){
        res.redirect('registration-org-correspondence-address')
    }
    else if (correspondenceChoice == "no2"){
        res.redirect('registration-org-correspondence-address')
    }
    else {
        res.redirect('registration-subsidiaries')
    }
})





// Routing for registration-subsidiaries.html
router.post('*/route-subsidiaries-choice', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "yes"){
        res.redirect('registration-subsidiaries-add-companies-house-search?subNumber=1')
    }
    else {
        res.redirect('registration-org-turnover')
    }
})


// Routing for registration-subsidiaries-add-companies-house.html
router.post('*/route-subsidiaries-companies-house', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "no"){
        res.redirect('registration-subsidiaries-add-name')
    }
    else {
        res.redirect('registration-subsidiaries-add-companies-house-lookup')
    }
})


// Routing for registration-subsidiaries-add-check.html
router.post('*/route-subsidiaries-add-check', function (req, res) {
    var subChoice = req.session.data['subChoice']
    if (subChoice == "no"){
        res.redirect('registration-subsidiaries-add-companies-house-search?subNumber=2')
    }
    else {
        res.redirect('registration-org-turnover')
    }
})



// Routing for registration-subsidiaries-add-remove.html
router.post('*/route-subsidiaries-add-remove-1', function (req, res) {
    var subRemoveChoice = req.session.data['subRemoveChoice']
    var subNumber = req.session.data['subNumber']
    if (subRemoveChoice == "no"){
        res.redirect('registration-subsidiaries-add')
    }
    else {
        res.redirect('registration-subsidiaries-add?sub1=null')
    }
})

router.post('*/route-subsidiaries-add-remove-2', function (req, res) {
    var subRemoveChoice = req.session.data['subRemoveChoice']
    var subNumber = req.session.data['subNumber']
    if (subRemoveChoice == "no"){
        res.redirect('registration-subsidiaries-add')
    }
    else {
        res.redirect('registration-subsidiaries-add?sub2=null')
    }
})





// Routing for payment-information.html
router.post('*/route-payment', function (req, res) {
    var paymentChoice = req.session.data['paymentChoice']
    if (paymentChoice == "no"){
        res.redirect('payment-incomplete')
    }
    else {
        res.redirect('payment-complete?paid=yes')
    }
})


// Routing for report-method.html
router.post('*/route-report-method', function (req, res) {
    var reportMethodChoice = req.session.data['reportMethodChoice']
    if (reportMethodChoice == "spreadsheet"){
        res.redirect('report-spreadsheet')
    }
    else {
        res.redirect('report-brandowner-start')
    }
})


// Routing for activities-step-01.html
router.post('*/route-activities-step-01', function (req, res) {
    var sellerOnly = req.session.data['sellerOnly']
    if (sellerOnly == "yes"){
        res.redirect('')
    }
    else {
        res.redirect('activities-primary-intro')
    }
})



// Routing for the packaging data collection pages depending on what packaging activities have been selected by the user during section 2 of the task list.
router.post('*/route-reporting-primary', function (req, res) {
    var activityPrimary01 = req.session.data['activityPrimary01']
    var activityPrimary02 = req.session.data['activityPrimary02']
    var activityPrimary03 = req.session.data['activityPrimary03']
    var activityPrimary04 = req.session.data['activityPrimary04']
    var activityPrimary05 = req.session.data['activityPrimary05']
    if (activityPrimary01 == "yes"){
        res.redirect('report-primary-01')
    }
    else if (activityPrimary02 == "yes"){
        res.redirect('report-primary-02')
    }
    else if (activityPrimary03 == "yes"){
        res.redirect('report-primary-03')
    }
    else if (activityPrimary04 == "yes"){
        res.redirect('report-primary-04')
    }
    else if (activityPrimary05 == "yes"){
        res.redirect('report-primary-05')
    }
    else {
        res.redirect('report-check-details')
    }
})


router.post('*/route-reporting-primary-01', function (req, res) {
    var activityPrimary02 = req.session.data['activityPrimary02']
    var activityPrimary03 = req.session.data['activityPrimary03']
    var activityPrimary04 = req.session.data['activityPrimary04']
    var activityPrimary05 = req.session.data['activityPrimary05']
    if (activityPrimary02 == "yes"){
        res.redirect('report-primary-02')
    }
    else if (activityPrimary03 == "yes"){
        res.redirect('report-primary-03')
    }
    else if (activityPrimary04 == "yes"){
        res.redirect('report-primary-04')
    }
    else if (activityPrimary05 == "yes"){
        res.redirect('report-primary-05')
    }
    else {
        res.redirect('report-check-details')
    }
})









// Routing for report-resubmit-remove.html
router.post('*/route-resubmit-remove', function (req, res) {
    var remove = req.session.data['remove'] // Get the producer type data to be removed
    var removeChoice = req.session.data['removeChoice'] // Get whether the user has chosen yes or no
    if (removeChoice == "yes"){
        res.redirect('report-resubmit?' + remove +'=no')
    }
    else {
        res.redirect('report-resubmit-change')
    }
})


// Routing for report-resubmit-remove-material.html
router.post('*/route-resubmit-remove-material', function (req, res) {
    var remove = req.session.data['remove'] // Get the material to be removed
    var removeChoiceMaterial = req.session.data['removeChoiceMaterial'] // Get whether the user has chosen yes or no
    if (removeChoiceMaterial == "yes"){
        res.redirect('report-resubmit-change?' + remove +'=0') // Set the material tonnage to zero because it's too difficult to remove the material name from the array of materials
    }
    else {
        res.redirect('report-resubmit-change')
    }
})



// Routing for data-method-question-01.html
router.post('*/route-method-question-01', function (req, res) {
    var methodBusinessSoftware = req.session.data['methodBusinessSoftware']
    if (methodBusinessSoftware == "yes"){
        res.redirect('data-method-question-02')
    }
    else {
        res.redirect('data-select-alternate-method')
    }
})


// Routing for data-method-question-02.html
router.post('*/route-method-question-02', function (req, res) {
    var methodSoftwareIntegration = req.session.data['methodSoftwareIntegration']
    if (methodSoftwareIntegration == "yes"){
        res.redirect('data-reporting-method-results')
    }
    else {
        res.redirect('data-select-alternate-method')
    }
})


// Routing for report-spreadsheet-check.html
router.post('*/route-report-spreadsheet-check', function (req, res) {
    var spreadsheetChoice = req.session.data['spreadsheetChoice']
    if (spreadsheetChoice == "no"){
        res.redirect('report-spreadsheet')
    }
    else {
        res.redirect('report-spreadsheet-upload')
    }
})





// Get the data values from session-data-defaults.js to use on any pages that use {{ defaults['VARIABLE_NAME'] }}
router.get('*/service-start-defra-check-requested', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/service-start-defra-check-requested')
})

router.get('*/registration-declaration', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/registration-declaration')
})

router.get('*/pending', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/pending')
})

router.get('*/registration-check-contact', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/registration-check-contact')
})

router.get('*/registration-check-details', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/registration-check-details')
})

router.get('*/registration-check-org', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/registration-check-org')
})

router.get('*/registration-check-org-correspondence', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/registration-check-org-correspondence')
})

router.get('*/registration-subsidiaries-add-companies-house-confirm', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/registration-subsidiaries-add-companies-house-confirm')
})

router.get('*/registration-subsidiaries-add', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/registration-subsidiaries-add')
})

router.get('*/registration-check-contact', function (request, response) {
    response.locals.defaults = require('../../../data/session-data-defaults.js')
    response.render('v5/epr/registration-check-contact')
})


module.exports = router