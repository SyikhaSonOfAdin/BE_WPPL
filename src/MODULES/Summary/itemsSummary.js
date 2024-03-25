const { WAREHOUSE_WPPL } = require("../../.conf/db-conf")
const TABLES = require("../../.conf/tables")

class Summary {
    add = async (Items_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection()
        const QUERY = [
            `INSERT INTO ${TABLES.SUMMARY.TABLE} (ITEMS_ID) VALUES (?)`
        ]
        const PARAMS = [[Items_id]]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0])
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release()
        }
    }

    received = async (Items_id, Qty) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection()
        const QUERY = [
            `UPDATE ${TABLES.SUMMARY.TABLE} AS s SET s.RECEIVED = s.RECEIVED + ? WHERE s.ITEMS_ID = ?`,
            `UPDATE ${TABLES.SUMMARY.TABLE} AS s SET s.STOCK = s.STOCK + ? WHERE s.ITEMS_ID = ?`,
        ]
        const PARAMS = [[Qty, Items_id]]

        try {
            for (let i = 0; i < QUERY.length; i++) {
                await CONNECTION.query(QUERY[i], PARAMS[0])
            }
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release()
        }
    }

    issued = async (Items_id, Qty) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection()
        const QUERY = [
            `UPDATE ${TABLES.SUMMARY.TABLE} AS s SET s.ISSUED = s.ISSUED + ? WHERE s.ITEMS_ID = ?`,
            `UPDATE ${TABLES.SUMMARY.TABLE} AS s SET s.STOCK = s.STOCK - ? WHERE s.ITEMS_ID = ?`,
        ]
        const PARAMS = [[Qty, Items_id]]

        try {
            for (let i = 0; i < QUERY.length; i++) {
                await CONNECTION.query(QUERY[i], PARAMS[0])
            }
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release()
        }
    }


    refresh = async () => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection()
        const QUERY = [
            `INSERT INTO ${TABLES.SUMMARY.TABLE} (ITEMS_ID, RECEIVED, ISSUED, STOCK) SELECT l.ID, SUM(r.QTY) AS RECEIVED, IFNULL(SUM(i.QTY), 0) AS ISSUED, SUM(r.QTY) - IFNULL(SUM(i.QTY), 0) AS STOCK FROM ${TABLES.ITEMS.LIST.TABLE} AS l LEFT JOIN ${TABLES.ITEMS.RECEIVE.TABLE} AS r ON l.ID = r.ITEMS_ID LEFT JOIN ${TABLES.ITEMS.ISSUED.TABLE} AS i ON l.ID = i.ITEMS_ID GROUP BY l.ID ON DUPLICATE KEY UPDATE RECEIVED = VALUES(RECEIVED), ISSUED = VALUES(ISSUED), STOCK = VALUES(STOCK)`
        ]

        try {
            await CONNECTION.query(QUERY[0])
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release()
        }
    }


    get = async () => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection()
        const QUERY = [
            `SELECT s.ID, s.ITEMS_ID, l.NAME, l.CODE, l.BRAND, l.MADE_IN, s.RECEIVED, s.ISSUED, s.STOCK FROM ${TABLES.SUMMARY.TABLE} AS s JOIN ${TABLES.ITEMS.LIST.TABLE} AS l ON s.ITEMS_ID = l.ID`
        ]

        try {
            const DATA = await CONNECTION.query(QUERY[0])

            return DATA;
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release()
        }
    }
}

module.exports = Summary



