const Location = require('../../../MODULES/Location/location');
const ENDPOINTS = require('../../../.conf/endpoints');
const express = require('express');
const router = express.Router();

const location = new Location()

router.post(ENDPOINTS.POST.LOCATION.ADD, async (req, res) => {
    const { name, company_id } = req.body 

    try {
        await location.add(name, company_id)
        res.status(200).json({
            success: "successfully added",
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            success: false,
        })
    }
})

module.exports = router ;
