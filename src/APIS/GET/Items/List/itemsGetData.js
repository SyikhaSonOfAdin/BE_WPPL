const ENDPOINTS = require('../../../../.conf/endpoints');
const { Items } = require('../../../../MODULES/Items/itemsList');

const express = require('express');
const router = express.Router();

const item = new Items()

router.get(ENDPOINTS.GET.ITEMS.LIST, async (req, res) => {
    try {
        const DATA = await item.get()

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