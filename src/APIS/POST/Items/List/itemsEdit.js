const ENDPOINTS = require('../../../../.conf/endpoints');
const { Items } = require('../../../../MODULES/Items/itemsList');
const express = require('express');
const router = express.Router();

const items = new Items() ;

router.post(ENDPOINTS.POST.ITEMS.LIST.EDIT, async (req, res) => {
    const { item_id, name, code, brand, made_in, input_by, company_id  } = req.body;

    try {
        await items.edit(item_id, name, code, brand, made_in, company_id, input_by )
        res.status(200).json({
            success: "successfully edited",
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false,
        })
    }
})

module.exports = router ;