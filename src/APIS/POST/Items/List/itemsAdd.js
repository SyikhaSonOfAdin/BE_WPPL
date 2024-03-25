const ENDPOINTS = require('../../../../.conf/endpoints');
const { Items } = require('../../../../MODULES/Items/itemsList');
const express = require('express');
const Summary = require('../../../../MODULES/Summary/itemsSummary');
const router = express.Router();

const items = new Items() ;
const summary = new Summary()

router.post(ENDPOINTS.POST.ITEMS.LIST.ADD, async (req, res) => {
    const { name, code, brand, made_in, company_id, input_by, input_date } = req.body;

    try {
        const ITEMS_ID = await items.add(name, code, brand, made_in, company_id, input_by, input_date)
        await summary.add(ITEMS_ID) 
        res.status(200).json({
            success: "successfully added",
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false,
        })
    }
})

module.exports = router ;