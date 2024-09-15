import { createContext, useContext, useState, useCallback } from 'react'

const URL_API = 'http://localhost:3000/api/perfumes'
const URL_CARRITO_API = 'http://localhost:3000/api/carrito'

const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([]) // Estado para el carrito

    const fetchApi = useCallback(async (url, options = {}) => {
        try {
            const response = await fetch(url, options)
            console.log('Respuesta del servidor:', response)
            if (!response.ok) {
                const errorText = await response.text()
                throw new Error(
                    `Error en la solicitud: ${response.statusText}. Respuesta: ${errorText}`
                )
            }
            const contentType = response.headers.get('Content-Type')
            if (contentType && contentType.includes('application/json')) {
                return await response.json()
            } else {
                const text = await response.text()
                throw new Error(`Respuesta inesperada: ${text}`)
            }
        } catch (err) {
            setError(err.message)
            console.error('Error en fetchApi:', err.message)
            throw err
        }
    }, [])

    const obtenerPerfumes = useCallback(async () => {
        try {
            const data = await fetchApi(URL_API)
            setProductos(data)
            return data
        } catch (err) {
            console.error('Error al obtener perfumes:', err.message)
            return []
        }
    }, [fetchApi])

    const obtenerCarrito = useCallback(async () => {
        try {
            const data = await fetchApi(URL_CARRITO_API)
            setCarrito(data)
            return data
        } catch (err) {
            console.error('Error al obtener carrito:', err.message)
            return []
        }
    }, [fetchApi])

    const crearUsuario = useCallback(
        async (usuario) => {
            return fetchApi('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario),
            })
        },
        [fetchApi]
    )

    const iniciarSesion = useCallback(
        async (credenciales) => {
            return fetchApi('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credenciales),
            })
        },
        [fetchApi]
    )

    const agregarPerfume = useCallback(
        async (perfume) => {
            return fetchApi(URL_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(perfume),
            })
        },
        [fetchApi]
    )

    const actualizarPerfume = useCallback(
        async (id, perfume) => {
            return fetchApi(`${URL_API}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(perfume),
            })
        },
        [fetchApi]
    )

    const agregarAlCarrito = useCallback(
        async (producto) => {
            try {
                const data = await fetchApi(URL_CARRITO_API, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(producto),
                })
                setCarrito(data)
                return data
            } catch (err) {
                console.error('Error al agregar al carrito:', err.message)
                return null
            }
        },
        [fetchApi]
    )

    const actualizarCarrito = useCallback(
        async (producto) => {
            try {
                const data = await fetchApi(
                    `${URL_CARRITO_API}/${producto.id}`,
                    {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(producto),
                    }
                )
                setCarrito(data)
                return data
            } catch (err) {
                console.error('Error al actualizar el carrito:', err.message)
                return null
            }
        },
        [fetchApi]
    )

    const eliminarDelCarrito = useCallback(
        async (id) => {
            try {
                const data = await fetchApi(`${URL_CARRITO_API}/${id}`, {
                    method: 'DELETE',
                })
                setCarrito(data)
                return data
            } catch (err) {
                console.error('Error al eliminar del carrito:', err.message)
                return null
            }
        },
        [fetchApi]
    )

    return (
        <ApiContext.Provider
            value={{
                crearUsuario,
                iniciarSesion,
                obtenerPerfumes,
                agregarPerfume,
                actualizarPerfume,
                obtenerCarrito,
                agregarAlCarrito,
                actualizarCarrito,
                eliminarDelCarrito,
                error,
                productos,
                carrito, // Estado para el carrito
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext)
