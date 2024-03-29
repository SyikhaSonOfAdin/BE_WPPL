const TABLES = {
    COMPANY: {
        TABLE: "company",
        COLOUMN: [
            "NAME",            
            "SINCE"            
        ]
    },
    USER: {
        TABLE: "users",
        COLOUMN: [
            "USERNAME",
            "EMAIL",
            "PASSWORD",
            "LEVEL",
            "COMPANY_ID"
        ]
    },
    ITEMS: {
        LIST: {
            TABLE: "items_list",
            COLOUMN: [
                "NAME",
                "CODE",
                "BRAND",
                "MADE_IN",
                "COMPANY_ID",
                "INPUT_BY",
                "INPUT_DATE"
            ]
        },
        RECEIVE: {
            TABLE: "items_receive",
            COLOUMN: [
                "ITEMS_ID",
                "QTY",
                "INPUT_BY",
                "INPUT_DATE",
                "COMPANY_ID",
            ]
        },
        ISSUED: {
            TABLE: "items_issued",
            COLOUMN: [
                "ITEMS_ID",
                "QTY",
                "INPUT_BY",
                "INPUT_DATE",
                "COMPANY_ID",
            ]
        }
    },
    SUMMARY: {
        TABLE: "sum_items",
        COLOUMN: [
            "ITEMS_ID",
            "RECEIVED",
            "ISSUED",
            "STOCK",
        ]
    }
}

module.exports = TABLES;