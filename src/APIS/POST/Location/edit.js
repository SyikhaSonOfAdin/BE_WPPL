const Location = require('../../../MODULES/Location/location');
const ENDPOINTS = require('../../../.conf/endpoints');
const express = require('express');
const router = express.Router();

const location = new Location()

router.post(ENDPOINTS.POST.LOCATION.EDIT, async (req, res) => {
    const { id, name } = req.body 

    try {
        await location.edit(id, name)
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
