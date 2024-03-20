const { WAREHOUSE_WPPL } = require("../../.conf/db-conf");
const TABLES = require("../../.conf/tables");


class Items {

    add = async (Name, Code, Brand, Made_in, Company_id, Input_by, Input_date) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() ;
        const QUERY = [
            `INSERT INTO ${TABLES.ITEMS.LIST.TABLE} (${TABLES.ITEMS.LIST.COLOUMN.join(',')}) VALUES (?, ?, ?, ?, ?, ?, ?)`
        ]
        const PARAMS = [[Name, Code, Brand, Made_in, Company_id, Input_by, Input_date]]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0]) 
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release() ;
        }
    }

    edit = async (Item_id, Name, Code, Brand, Made_in, Company_id, Input_by) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() ;
        const QUERY = [
            `UPDATE ${TABLES.ITEMS.LIST.TABLE} AS t SET t.NAME = ?, t.CODE = ?, t.BRAND = ?, t.MADE_IN = ?, t.INPUT_BY = ? WHERE t.COMPANY_ID = ? AND t.ID = ?`
        ]
        const PARAMS = [[Name, Code, Brand, Made_in, Input_by, Company_id, Item_id]]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0]) 
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release() ;
        }
    }

    delete = async (Item_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection() ;
        const QUERY = [
            `DELETE FROM ${TABLES.ITEMS.LIST.TABLE} WHERE ID = ?`
        ]
        const PARAMS = [[Item_id]]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0]) 
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release() ;
        }
    }
}

module.exports = {
    Items
}