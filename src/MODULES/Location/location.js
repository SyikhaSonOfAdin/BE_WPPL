const { WAREHOUSE_WPPL } = require("../../.conf/db-conf");
const TABLES = require("../../.conf/tables");

class Location {
    add = async (name, company_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection();
        const QUERY = [
            `INSERT INTO ${TABLES.LOCATION.TABLE} (${TABLES.LOCATION.COLUMN.join(',')}) VALUES (?, ?)`
        ]
        const PARAMS = [
            [name, company_id]
        ]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0])
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release();
        }
    }

    edit = async (id, name) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection();
        const QUERY = [
            `UPDATE ${TABLES.LOCATION.TABLE} AS t SET t.NAME = ? WHERE t.ID = ?`
        ]
        const PARAMS = [
            [name, id]
        ]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0])
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release();
        }
    }

    delete = async (id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection();
        const QUERY = [
            `DELETE FROM ${TABLES.LOCATION.TABLE} WHERE ID = ?`
        ]
        const PARAMS = [
            [id]
        ]

        try {
            await CONNECTION.query(QUERY[0], PARAMS[0])
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release();
        }
    }
    
    get = async (company_id) => {
        const CONNECTION = await WAREHOUSE_WPPL.getConnection();
        const QUERY = [
            `SELECT l.ID, l.NAME, c.NAME AS COMPANY_NAME FROM ${TABLES.LOCATION.TABLE} AS l 
            JOIN ${TABLES.COMPANY.TABLE} AS c ON l.COMPANY_ID = c.ID WHERE COMPANY_ID = ?`
        ]
        const PARAMS = [
            [company_id]
        ]

        try {
            const DATA = await CONNECTION.query(QUERY[0], PARAMS[0])
            return DATA 
        } catch (error) {
            throw error
        } finally {
            CONNECTION.release();
        }
    }

}

module.exports = Location