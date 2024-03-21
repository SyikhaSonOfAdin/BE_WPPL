
const ENDPOINTS = require('../../../../.conf/endpoints');

const express = require('express');
const Issued = require('../../../../MODULES/Items/itemsIssued');
const router = express.Router();

const issued = new Issued()

router.get(ENDPOINTS.GET.ITEMS.ISSUED, async (req, res) => {
    try {
        const DATA = await issued.get()

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