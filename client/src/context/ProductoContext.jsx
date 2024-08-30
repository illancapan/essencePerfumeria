import { createContext, useState, useEffect } from 'react'
const ProductoContext = createContext()

const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                // Importar el archivo JSON estatico
                const respuesta = await import('../data/prueba.json')
                console.log('Datos de la respuesta:', respuesta)
                setProductos(respuesta.default || respuesta.photos || [])
            } catch (error) {
                setError(error)
            } finally {
                setCargando(false)
            }
        }

        cargarProductos()
    }, [])

    return (
        <ProductoContext.Provider value={{ productos, cargando, error }}>
            {children}
        </ProductoContext.Provider>
    )
}

export { ProductoContext, ProductosProvider }
