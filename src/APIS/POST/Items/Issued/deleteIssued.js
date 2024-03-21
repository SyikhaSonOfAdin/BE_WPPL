const Issued = require('../../../../MODULES/Items/itemsIssued');
const ENDPOINTS = require('../../../../.conf/endpoints');

const express = require('express');
const router = express.Router();

const issued = new Issued();

router.post(ENDPOINTS.POST.ITEMS.ISSUED.DELETE, async (req, res) => {
    const { id, company_id } = req.body

    try {
        await issued.delete(id, company_id) 
        res.status(200).json({
            success: "Items deleted successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false
        })
    }
})

module.exports = router