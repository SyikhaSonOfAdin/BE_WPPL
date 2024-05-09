const PATH_CONF = {
    POST: {
        LOGIN: require('../APIS/POST/Login/login'),
        LOCATION: {
            ADD: require('../APIS/POST/Location/add'),
            EDIT: require('../APIS/POST/Location/edit'),
            DELETE: require('../APIS/POST/Location/delete'),
        },
        ITEMS: {
            LIST: {
                ADD: require('../APIS/POST/Items/List/itemsAdd'),
                EDIT: require('../APIS/POST/Items/List/itemsEdit'),
                DELETE: require('../APIS/POST/Items/List/itemsDelete'),
            },
            RECEIVE: {
                ADD: require('../APIS/POST/Items/Receive/addReceive'),
                EDIT: require('../APIS/POST/Items/Receive/editReceive'),
                DELETE: require('../APIS/POST/Items/Receive/deleteReceive'),
            },
            ISSUED: {
                ADD: require('../APIS/POST/Items/Issued/addIssued'),
                EDIT: require('../APIS/POST/Items/Issued/editIssued'),
                DELETE: require('../APIS/POST/Items/Issued/deleteIssued'),
            }
        }
    },
    GET: {
        LOCATION: require('../APIS/GET/Location/location'),
        ITEMS: {
            LIST: require('../APIS/GET/Items/List/itemsGetData'),
            RECEIVE: require('../APIS/GET/Items/Receive/receiveGetData'),
            ISSUED: require('../APIS/GET/Items/Issued/issuedGetData'),
        },
        SUMMARY: {
            ITENS: require('../APIS/GET/Summary/Items/itemsSummary')
        }
    }
}

const ARRAY_PATH = {
    POST: [
        PATH_CONF.POST.LOGIN,

        // LOCATIONS
        PATH_CONF.POST.LOCATION.ADD,
        PATH_CONF.POST.LOCATION.EDIT,
        PATH_CONF.POST.LOCATION.DELETE,

        // ITEMs LIST
        PATH_CONF.POST.ITEMS.LIST.ADD,
        PATH_CONF.POST.ITEMS.LIST.EDIT,
        PATH_CONF.POST.ITEMS.LIST.DELETE,

        // ITEMS RECEIVE
        PATH_CONF.POST.ITEMS.RECEIVE.ADD,
        PATH_CONF.POST.ITEMS.RECEIVE.EDIT,
        PATH_CONF.POST.ITEMS.RECEIVE.DELETE,

        // ITEMS ISSUED
        PATH_CONF.POST.ITEMS.ISSUED.ADD,
        PATH_CONF.POST.ITEMS.ISSUED.EDIT,
        PATH_CONF.POST.ITEMS.ISSUED.DELETE,
    ],
    GET: [
        // LOCATION
        PATH_CONF.GET.LOCATION,

        // ITENS
        PATH_CONF.GET.ITEMS.LIST,
        PATH_CONF.GET.ITEMS.RECEIVE,
        PATH_CONF.GET.ITEMS.ISSUED,

        // SUMMARY
        PATH_CONF.GET.SUMMARY.ITENS
    ]
}
module.exports = ARRAY_PATH;