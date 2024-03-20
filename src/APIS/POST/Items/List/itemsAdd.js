const ENDPOINTS = require('../../../../.conf/endpoints');
const { Items } = require('../../../../MODULES/Items/itemsList');
const express = require('express');
const router = express.Router();

const items = new Items() ;

router.post(ENDPOINTS.POST.ITEMS.LIST.ADD, async (req, res) => {
    const { name, code, brand, made_in, company_id, input_by, input_date } = req.body;

    try {
        await items.add(name, code, brand, made_in, company_id, input_by, input_date)
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