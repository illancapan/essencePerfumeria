import { createContext, useContext, useState } from 'react'

const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
    const [error, setError] = useState(null)

    const fetchApi = async (url, options = {}) => {
        try {
            const response = await fetch(url, options)
            if (!response.ok) {
                throw new Error('Error en la solicitud')
            }
            return await response.json()
        } catch (err) {
            setError(err.message)
            throw err
        }
    }

    const crearUsuario = async (usuario) => {
        return fetchApi('/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        })
    }

    const iniciarSesion = async (credenciales) => {
        return fetchApi('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credenciales),
        })
    }

    const obtenerPerfumes = async () => {
        return fetchApi('/api/perfumes')
    }

    const obtenerDetallesPerfume = async (id) => {
        return fetchApi(`/api/perfumes/${id}`)
    }

    const agregarPerfume = async (perfume) => {
        return fetchApi('/api/perfumes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(perfume),
        })
    }

    const actualizarPerfume = async (id, perfume) => {
        return fetchApi(`/api/perfumes/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(perfume),
        })
    }

    return (
        <ApiContext.Provider
            value={{
                crearUsuario,
                iniciarSesion,
                obtenerPerfumes,
                obtenerDetallesPerfume,
                agregarPerfume,
                actualizarPerfume,
                error,
            }}
        >
            {children}
        </ApiContext.Provider>
    )
}

export const useApi = () => useContext(ApiContext)
