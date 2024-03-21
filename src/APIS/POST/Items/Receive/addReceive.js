const ENDPOINTS = require('../../../../.conf/endpoints');
const Receive = require('../../../../MODULES/Items/itemsReceive');

const express = require('express');
const router = express.Router();

const receive = new Receive()

router.post(ENDPOINTS.POST.ITEMS.RECEIVE.ADD, async (req, res) => {
    const { item_id, qty, input_by, input_date, company_id } = req.body

    try {
        await receive.add(item_id, qty, input_by, input_date, company_id)
        res.status(200).json({
            success: "Receive added successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false
        })
    }
})

module.exports = router