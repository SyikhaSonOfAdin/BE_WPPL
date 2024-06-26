const { WAREHOUSE_WPPL } = require("../../.conf/db-conf")
const TABLES = require("../../.conf/tables")

class Receive {

    add =  async (Item_id, Qty, Input_by, Input_date, Company_id, location_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() 
        const QUERY = [
            `INSERT INTO ${TABLES.ITEMS.RECEIVE.TABLE} (${TABLES.ITEMS.RECEIVE.COLUMN.join(',')}) VALUES (?, ?, ?, ?, ?, ?)`
        ]
        const PARAMS = [[Item_id, Qty, Input_by, Input_date, location_id, Company_id]]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0]) ;
        } catch (error) {
            throw error 
        } finally {
            CONNECTION.release()
        }
    }

    edit = async (Id, Items_id, Qty, Input_by, Company_id, location_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection()
        const QUERY = [
            `UPDATE ${TABLES.SUMMARY.TABLE} AS s JOIN ${TABLES.ITEMS.RECEIVE.TABLE} AS r ON s.ITEMS_ID = r.ITEMS_ID SET s.STOCK = s.STOCK - r.QTY, s.RECEIVED = s.RECEIVED - r.QTY WHERE r.ID = ?`,
            `UPDATE ${TABLES.SUMMARY.TABLE} AS s JOIN ${TABLES.ITEMS.RECEIVE.TABLE} AS r ON s.ITEMS_ID = r.ITEMS_ID SET s.STOCK = s.STOCK + ?, s.RECEIVED = s.RECEIVED + ? WHERE r.ID = ?`,
            `UPDATE ${TABLES.ITEMS.RECEIVE.TABLE} AS t SET t.ITEMS_ID = ?, t.QTY = ?, t.INPUT_BY = ?, t.LOCATION_ID = ? WHERE t.COMPANY_ID = ? AND t.ID = ?`
        ]
        const PARAMS = [[Id], [Qty, Qty, Id], [Items_id, Qty, Input_by, location_id, Company_id, Id]]

        try {
            for (let i = 0; i < QUERY.length; i++) {
                await CONNECTION.query(QUERY[i], PARAMS[i]);
            }
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release()
        }
    }

    delete =  async (Id, Company_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() 
        const QUERY = [
            `UPDATE ${TABLES.SUMMARY.TABLE} AS s JOIN ${TABLES.ITEMS.RECEIVE.TABLE} AS r ON s.ITEMS_ID = r.ITEMS_ID SET s.STOCK = s.STOCK - r.QTY, s.RECEIVED = s.RECEIVED - r.QTY WHERE r.ID = ?`,
            `DELETE FROM ${TABLES.ITEMS.RECEIVE.TABLE} WHERE ID = ? AND COMPANY_ID = ?`
        ]
        const PARAMS = [[Id], [Id, Company_id]]

        try {
            for (let i = 0 ; i < QUERY.length ; i++) {
                await CONNECTION.query(QUERY[i], PARAMS[i]) ;
            }
        } catch (error) {
            throw error 
        } finally {
            CONNECTION.release()
        }
    }

    get = async (Company_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() 
        const QUERY = [
            `SELECT l.ID, i.ID AS ITEM_ID, lo.ID AS LOCATION_ID, l.NAME, l.CODE, l.BRAND, l.MADE_IN, i.QTY, lo.NAME AS LOCATION_NAME, DATE_FORMAT(i.INPUT_DATE, '%Y-%m-%d') AS INPUT_DATE, u.USERNAME AS INPUT_BY, c.NAME AS COMPANY_NAME 
            FROM ${TABLES.ITEMS.RECEIVE.TABLE} AS i 
            JOIN ${TABLES.ITEMS.LIST.TABLE} AS l ON i.ITEMS_ID = l.ID 
            JOIN ${TABLES.USER.TABLE} AS u ON i.INPUT_BY = u.ID 
            JOIN ${TABLES.COMPANY.TABLE} AS c ON i.COMPANY_ID = c.ID 
            JOIN ${TABLES.LOCATION.TABLE} AS lo ON i.LOCATION_ID = lo.ID 
            WHERE c.ID = ?            
            `
        ]
        const PARAMS = [[Company_id]]
        
        try {
            const DATA = await CONNECTION.query(QUERY[0], PARAMS[0]) 
            return DATA 
        } catch (error) {
            throw error 
        } finally {
            CONNECTION.release()
        }
    }
}

module.exports = Receive ;