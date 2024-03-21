const Issued = require('../../../../MODULES/Items/itemsIssued');
const ENDPOINTS = require('../../../../.conf/endpoints');

const express = require('express');
const router = express.Router();

const issued = new Issued()

router.post(ENDPOINTS.POST.ITEMS.ISSUED.EDIT, async (req, res) => {
    const { id, item_id, qty, input_by, company_id } = req.body

    try {
        await issued.edit(id, item_id, qty, input_by, company_id)
        res.status(200).json({
            success: "issued edited successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false
        })
    }
})

module.exports = router