const ENDPOINTS = {
    GET: {
        LOCATION: '/location',
        ITEMS: {
            LIST: '/items/list',
            RECEIVE: '/items/receive',
            ISSUED: '/items/issued',
        },
        SUMMARY: {
            ITEMS: '/summary/items'
        }
    },
    POST: {
        LOGIN: '/login',
        LOCATION: {
            ADD: '/location/add',
            EDIT: '/location/edit',
            DELETE: '/location/delete',
        },
        ITEMS: {
            LIST: {
                ADD: '/items/list/add',
                EDIT: '/items/list/edit',
                DELETE: '/items/list/delete',
            },
            RECEIVE: {
                ADD: '/items/receive/add',
                EDIT: '/items/receive/edit',
                DELETE: '/items/receive/delete',
            },
            ISSUED: {
                ADD: '/items/issued/add',
                EDIT: '/items/issued/edit',
                DELETE: '/items/issued/delete',
            }
        },
    }
}

module.exports = ENDPOINTS;