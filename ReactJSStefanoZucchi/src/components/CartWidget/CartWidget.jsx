import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext)
    
    return (
    
    <div className='carrito-widget'>
    
    <img className='carrito-icono' src="../../../public/assets/img/carrito-compra.png" alt="carrito" />

    <p>{cantidadCarrito == 0 ? null : cantidadCarrito()}</p>

    </div>
  
  )
}

export default CartWidget