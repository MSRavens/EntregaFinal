import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

  const Cart = () => {

  const {cart,vaciarCarrito,eliminarArticulo,totalCarrito} = useContext(CartContext)

  return (
    <div className='carrito'>

      {cart.length == 0
        ?
        <>
          <h1>Carrito de Compras</h1>
          <h2>No hay artículos seleccionados</h2>
          <Link to={"/"}>Inicio</Link>
        </>

        :
        <>
        <h2>Lista de Carrito</h2>
        {cart.map((l) => (
          <CartItem key={l.articulo.id} articulo={l} eliminarArticulo={eliminarArticulo}/>
        ))}

        <p>Total: ${totalCarrito()}</p>

        <button onClick={vaciarCarrito}>Vaciar Carrito</button>

          <Link to={'/CheckOut'}>
            Finalizar Compra
          </Link>

        </>
      }

    </div>
  );
};

export default Cart;