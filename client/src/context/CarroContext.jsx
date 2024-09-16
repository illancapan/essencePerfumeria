// src/context/CarroContext.jsx
import { createContext, useState, useEffect } from 'react'

export const CarroContext = createContext()

export const CarroProvider = ({ children }) => {
    const [carro, setCarro] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchCarrito = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/carrito/2')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            // Verifica el tipo de contenido antes de convertirlo a JSON
            const contentType = response.headers.get('Content-Type')
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json()
                setCarro(data)
            } else {
                console.error('Respuesta no es JSON:', await response.text())
            }
        } catch (error) {
            console.error('Error fetching carrito:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCarrito()
    }, [])

    return (
        <CarroContext.Provider value={{ carro, loading }}>
            {children}
        </CarroContext.Provider>
    )
}
