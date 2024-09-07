import { pool } from "../../database/config.js"

const getData = async () =>{
    const sql = 'SELECT * FROM productos'
    try {
        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
        console.error(error.message)
    }
}

export const productsModels = {
    getData
}
