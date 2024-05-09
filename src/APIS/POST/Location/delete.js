const Location = require('../../../MODULES/Location/location');
const ENDPOINTS = require('../../../.conf/endpoints');
const express = require('express');
const router = express.Router();

const location = new Location()

router.post(ENDPOINTS.POST.LOCATION.DELETE, async (req, res) => {
    const { id } = req.body 

    try {
        await location.delete(id)
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
