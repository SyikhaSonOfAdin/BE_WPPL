const Issued = require('../../../../MODULES/Items/itemsIssued');
const ENDPOINTS = require('../../../../.conf/endpoints');

const express = require('express');
const router = express.Router();

const issued = new Issued();

router.post(ENDPOINTS.POST.ITEMS.ISSUED.ADD, async (req, res) => {
    const { item_id, qty, input_by, input_date, company_id } = req.body

    try {
        await issued.add(item_id, qty, input_by, input_date, company_id)
        res.status(200).json({
            success: "issued added successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false
        })
    }
})

module.exports = router