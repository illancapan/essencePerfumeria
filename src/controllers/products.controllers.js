import { productsModels } from "../models/products.models.js";

const getProducts = async (req, res) =>{
    try {
        const response = await productsModels.getData()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getProductDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productsModels.getProductDetail(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export const productsController ={
    getProducts,
    getProductDetail
}
