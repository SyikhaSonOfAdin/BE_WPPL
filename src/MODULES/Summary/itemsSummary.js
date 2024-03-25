const { WAREHOUSE_WPPL } = require("../../.conf/db-conf")
const TABLES = require("../../.conf/tables")

class Summary {
    get = async () => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() 
        const QUERY = [
            `SELECT * FROM ${TABLES.SUMMARY.TABLE} AS s`
        ]

        try {
            const DATA = await CONNECTION.query(QUERY[0])

            return DATA ;
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release()
        }
    }
}

module.exports = Summary 