const PATH_CONF = {
    POST: {
        LOGIN: require('../APIS/POST/Login/login'),        
    },
    GET: {

    }
}

const ARRAY_PATH = {
    POST: [
        PATH_CONF.POST.LOGIN,
    ],
    GET: [
        PATH_CONF.POST.LOGIN,
    ]
}
module.exports = ARRAY_PATH;