const express = require('express');
const security = require('../../../MIDDLEWARE/SECURITY/security');
const ENDPOINTS = require('../../../.conf/endpoints');
const Location = require('../../../MODULES/Location/location');
const router = express.Router();

const location = new Location()

router.get(`${ENDPOINTS.GET.LOCATION}/:user_id/:company_id`, security.first, async (req, res) => {   
    const company_id = req.params.company_id

    try {
        const DATA = await location.get(company_id) ;
        res.status(200).json(DATA[0])        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router