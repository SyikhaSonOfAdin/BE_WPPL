const security = require('../../../../MIDDLEWARE/SECURITY/security');
const Summary = require('../../../../MODULES/Summary/itemsSummary');
const ENDPOINTS = require('../../../../.conf/endpoints')

const express = require('express');
const router = express.Router();

const summary = new Summary() 

router.get(`${ENDPOINTS.GET.SUMMARY.ITEMS}/:user_id/:company_id`, security.first, async (req, res) => {   
    const company_id = req.params.company_id

    try {
        const DATA = await summary.get(company_id) ;
        res.status(200).json(DATA[0])        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router