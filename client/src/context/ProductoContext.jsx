import { createContext, useState, useEffect } from 'react'
const ProductoContext = createContext()
const URL_API = 'http://localhost:3000/api/perfumes'

const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [fragancia_id, setFragancia_id] = useState('');
    const [genero, setGenero] = useState('');
    const [orderBy, setOrderBy] = useState('');
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const url = new URL(URL_API);
                const params = new URLSearchParams({ fragancia_id, genero, orderBy });
                url.search = params.toString();

                const respuesta = await fetch(url);
                const data = await respuesta.json();
                if (Array.isArray(data)) {
                    setProductos(data);
                } else {
                    throw new Error('Datos inesperados del servidor');
                }
            } catch (error) {
                setError(error)
            } finally {
                setCargando(false)
            }
        }

        cargarProductos()
    }, [fragancia_id, genero, orderBy])

    return (
        <ProductoContext.Provider value={{ productos, cargando, error, setFragancia_id, setGenero, setOrderBy }}>
            {children}
        </ProductoContext.Provider>
    )
}

export { ProductoContext, ProductosProvider }
