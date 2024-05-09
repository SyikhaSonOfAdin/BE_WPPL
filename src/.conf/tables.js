const TABLES = {
    COMPANY: {
        TABLE: "company",
        COLUMN: [
            "NAME",            
            "SINCE"            
        ]
    },
    USER: {
        TABLE: "users",
        COLUMN: [
            "USERNAME",
            "EMAIL",
            "PASSWORD",
            "LEVEL",
            "COMPANY_ID"
        ]
    },
    LOCATION: {
        TABLE: "locations",
        COLUMN: [
            "NAME",
            "COMPANY_ID",
        ]
    },
    ITEMS: {
        LIST: {
            TABLE: "items_list",
            COLUMN: [
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
            COLUMN: [
                "ITEMS_ID",
                "QTY",
                "INPUT_BY",
                "INPUT_DATE",
                "LOCATION_ID",
                "COMPANY_ID",
            ]
        },
        ISSUED: {
            TABLE: "items_issued",
            COLUMN: [
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
        COLUMN: [
            "ITEMS_ID",
            "RECEIVED",
            "ISSUED",
            "STOCK",
        ]
    }
}

module.exports = TABLES;