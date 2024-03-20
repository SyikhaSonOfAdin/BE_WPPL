const { Items } = require('../../../../MODULES/Items/itemsList');
const ENDPOINTS = require('../../../../.conf/endpoints');

const express = require('express');
const router = express.Router();

const items = new Items() ;

router.post(ENDPOINTS.POST.ITEMS.LIST.DELETE, async (req, res) => {
    const { item_id } = req.body;

    try {
        await items.delete(item_id);
        res.status(200).json({
            success: "successfully deleted",
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false,
        })
    }
})

module.exports = router ;