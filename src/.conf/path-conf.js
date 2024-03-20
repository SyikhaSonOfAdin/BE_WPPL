const PATH_CONF = {
    POST: {
        LOGIN: require('../APIS/POST/Login/login'),
        ITEMS: {
            LIST: {
                ADD: require('../APIS/POST/Items/List/itemsAdd'),
                EDIT: require('../APIS/POST/Items/List/itemsEdit'),
                DELETE: require('../APIS/POST/Items/List/itemsDelete'),
            }
        }
    },
    GET: {

    }
}

const ARRAY_PATH = {
    POST: [
        PATH_CONF.POST.LOGIN,
        PATH_CONF.POST.ITEMS.LIST.ADD,
        PATH_CONF.POST.ITEMS.LIST.EDIT,
        PATH_CONF.POST.ITEMS.LIST.DELETE,
    ],
    GET: [
        PATH_CONF.POST.LOGIN,
    ]
}
module.exports = ARRAY_PATH;