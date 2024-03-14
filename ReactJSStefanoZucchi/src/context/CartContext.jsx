import React, {createContext, useState} from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])

    const agregarAlCarrito = (articulo,cantidad) => {

        const articuloElegido = cart.findIndex(art => art.articulo.id == articulo.id)

        if(articuloElegido == -1){
            setCart([...cart,{articulo,cantidad}])
        }else{
            const nuevoCarrito = [...cart]
            nuevoCarrito[articuloElegido].cantidad += cantidad
            setCart(nuevoCarrito)
        }

    }

    const eliminarArticulo = (articuloId) => {
        const nuevoCarrito = cart.filter(item => item.articulo.id !== articuloId)
        setCart(nuevoCarrito)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const cantidadCarrito = () => {
        const totalCantidad = cart.reduce((total,item) => total+item.cantidad,0)
        return totalCantidad

    }

    const totalCarrito = () => {
        const precioTotal = cart.reduce((total, item) => total + (item.articulo.precio * item.cantidad), 0)
        return precioTotal
    }


    return(
            <CartContext.Provider value={{
                cart,
                agregarAlCarrito,
                eliminarArticulo,
                vaciarCarrito,
                cantidadCarrito,
                totalCarrito

            }}>
                {children}
            </CartContext.Provider>

    )
}

export default CartProvider