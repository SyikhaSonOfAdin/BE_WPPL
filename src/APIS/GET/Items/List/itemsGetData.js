const security = require('../../../../MIDDLEWARE/SECURITY/security');
const { Items } = require('../../../../MODULES/Items/itemsList');
const ENDPOINTS = require('../../../../.conf/endpoints');

const express = require('express');
const router = express.Router();

const item = new Items()

router.get(`${ENDPOINTS.GET.ITEMS.LIST}/:user_id/:company_id`, security.first, async (req, res) => {
    const company_id = req.params.company_id

    try {
        const DATA = await item.get(company_id)

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