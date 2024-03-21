const ENDPOINTS = require('../../../../.conf/endpoints');
const Receive = require('../../../../MODULES/Items/itemsReceive');

const express = require('express');
const router = express.Router();

const receive = new Receive()

router.post(ENDPOINTS.POST.ITEMS.RECEIVE.EDIT, async (req, res) => {
    const { id, item_id, qty, input_by, company_id } = req.body

    try {
        await receive.edit(id, item_id, qty, input_by, company_id)
        res.status(200).json({
            success: "Receive edited successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false
        })
    }
})

module.exports = router