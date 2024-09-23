import { createContext, useState, useEffect } from 'react'

const ProductoContext = createContext()
// Reemplazamos la URL fija con la variable de entorno
const URL_API = import.meta.env.VITE_API_URL;

const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [fragancia_id, setFragancia_id] = useState('')
    const [orderBy, setOrderBy] = useState('')
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const url = new URL(URL_API)
                const params = new URLSearchParams({ fragancia_id, orderBy })
                url.search = params.toString()

                const respuesta = await fetch(url)
                const data = await respuesta.json()
                if (Array.isArray(data)) {
                    setProductos(data)
                } else {
                    throw new Error('Datos inesperados del servidor')
                }
            } catch (error) {
                setError(error)
            } finally {
                setCargando(false)
            }
        }

        cargarProductos()
    }, [fragancia_id, orderBy])

    return (
        <ProductoContext.Provider
            value={{ productos, cargando, error, setFragancia_id, setOrderBy }}
        >
            {children}
        </ProductoContext.Provider>
    )
}

export { ProductoContext, ProductosProvider }
