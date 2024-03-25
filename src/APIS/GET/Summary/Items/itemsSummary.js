const Summary = require('../../../../MODULES/Summary/itemsSummary');
const ENDPOINTS = require('../../../../.conf/endpoints')
const express = require('express');
const router = express.Router();


const summary = new Summary() 

router.get(ENDPOINTS.GET.SUMMARY.ITEMS, async (req, res) => {
    try {
        const DATA = await summary.get() ;
        res.status(200).json(DATA[0])        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router