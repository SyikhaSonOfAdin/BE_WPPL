const ENDPOINTS = require('../../../../.conf/endpoints');
const Receive = require('../../../../MODULES/Items/itemsReceive');

const express = require('express');
const router = express.Router();

const receive = new Receive()

router.post(ENDPOINTS.POST.ITEMS.RECEIVE.DELETE, async (req, res) => {
    const { id, company_id } = req.body

    try {
        await receive.delete(id, company_id) 
        res.status(200).json({
            success: "Receive deleted successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false
        })
    }
})

module.exports = router