const Receive = require('../../../../MODULES/Items/itemsReceive');
const ENDPOINTS = require('../../../../.conf/endpoints');

const express = require('express');
const router = express.Router();

const receive = new Receive()

router.get(ENDPOINTS.GET.ITEMS.RECEIVE, async (req, res) => {
    try {
        const DATA = await receive.get()

        res.status(200).json(
            DATA[0]
        )
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false
        })
    }
})

module.exports = router ;