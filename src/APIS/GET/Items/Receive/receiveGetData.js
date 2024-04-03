const security = require('../../../../MIDDLEWARE/SECURITY/security');
const Receive = require('../../../../MODULES/Items/itemsReceive');
const ENDPOINTS = require('../../../../.conf/endpoints');

const express = require('express');
const router = express.Router();

const receive = new Receive()

router.get(`${ENDPOINTS.GET.ITEMS.RECEIVE}/:user_id/:company_id`, security.first, async (req, res) => {
    const company_id = req.params.company_id

    try {
        const DATA = await receive.get(company_id)

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