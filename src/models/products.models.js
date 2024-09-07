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

const getProductDetail = async (id) => {
    const sql = 'SELECT * FROM productos WHERE id = $1'; 
    try {
        const response = await pool.query(sql, [id]);
        return response.rows[0];
    } catch (error) {
        console.error(error.message);
        throw new Error('Error al obtener los detalles del producto');
    }
}

export const productsModels = {
    getData,
    getProductDetail
}
