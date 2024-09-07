import { productsModels } from "../models/products.models.js";

const getData = async (req, res) =>{
    try {
        const response = await productsModels.getData()
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
} 

export const productsController ={
    getData
}
