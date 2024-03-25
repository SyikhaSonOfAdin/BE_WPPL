const { WAREHOUSE_WPPL } = require("../../.conf/db-conf")
const TABLES = require("../../.conf/tables")

class Issued {

    add =  async (Item_id, Qty, Input_by, Input_date, Company_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() 
        const QUERY = [
            `INSERT INTO ${TABLES.ITEMS.ISSUED.TABLE} (${TABLES.ITEMS.ISSUED.COLOUMN.join(',')}) VALUES (?, ?, ?, ?, ?)`
        ]
        const PARAMS = [[Item_id, Qty, Input_by, Input_date, Company_id]]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0]) ;
        } catch (error) {
            throw error 
        } finally {
            CONNECTION.release()
        }
    }

    edit =  async (Id, Items_id, Qty, Input_by, Company_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() 
        const QUERY = [
            `UPDATE ${TABLES.ITEMS.ISSUED.TABLE} AS t SET t.ITEMS_ID = ?, t.QTY = ?, t.INPUT_BY = ? WHERE t.COMPANY_ID = ? AND t.ID = ?`
        ]
        const PARAMS = [[Items_id, Qty, Input_by, Company_id, Id]]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0]) ;
        } catch (error) {
            throw error 
        } finally {
            CONNECTION.release()
        }
    }

    delete =  async (Id, Company_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() 
        const QUERY = [
            `DELETE FROM ${TABLES.ITEMS.ISSUED.TABLE} WHERE ID = ? AND COMPANY_ID = ?`
        ]
        const PARAMS = [[Id, Company_id]]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0]) ;
        } catch (error) {
            throw error 
        } finally {
            CONNECTION.release()
        }
    }

    get = async () => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() 
        const QUERY = [
            `SELECT l.ID, l.NAME, l.CODE, l.BRAND, l.MADE_IN, i.QTY, DATE_FORMAT(i.INPUT_DATE, '%Y-%m-%d') AS INPUT_DATE, u.USERNAME AS INPUT_BY, c.NAME AS COMPANY_NAME FROM ${TABLES.ITEMS.ISSUED.TABLE} AS i JOIN ${TABLES.ITEMS.LIST.TABLE} AS l ON i.ITEMS_ID = l.ID JOIN ${TABLES.USER.TABLE} AS u ON i.INPUT_BY = u.ID JOIN ${TABLES.COMPANY.TABLE} AS c ON i.COMPANY_ID = c.ID `
        ]
        
        try {
            const DATA = await CONNECTION.query(QUERY[0]) 
            return DATA 
        } catch (error) {
            throw error 
        } finally {
            CONNECTION.release()
        }
    }
}

module.exports = Issued ;