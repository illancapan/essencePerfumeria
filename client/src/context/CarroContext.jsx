import { createContext, useState, useEffect, useCallback } from 'react'

export const CarroContext = createContext()

export const CarroProvider = ({ children }) => {
    const [carro, setCarro] = useState(() => {
        // Cargar carrito desde localStorage al iniciar
        const carritoGuardado = localStorage.getItem('carro')
        const carroInicial = carritoGuardado ? JSON.parse(carritoGuardado) : []

        // Filtrar productos inválidos
        return carroInicial.filter(
            (producto) => producto && producto.precio != null
        )
    })

    // Función para añadir un producto al carrito
    const añadirAlCarrito = useCallback((producto) => {
        setCarro((prevCarro) => {
            // Verifica si el producto ya está en el carrito
            const productoExistente = prevCarro.find(
                (item) => item.id === producto.id
            )
            if (productoExistente) {
                console.log('El producto ya está en el carrito.')
                return prevCarro // No agregar el producto si ya existe
            }
            const nuevoCarro = [...prevCarro, producto]
            localStorage.setItem('carro', JSON.stringify(nuevoCarro)) // Guardar en localStorage
            return nuevoCarro
        })
    }, [])

    return (
        <CarroContext.Provider value={{ carro, añadirAlCarrito }}>
            {children}
        </CarroContext.Provider>
    )
}
