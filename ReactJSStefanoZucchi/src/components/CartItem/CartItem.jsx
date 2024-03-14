import React from 'react';
import './CartItem.css'

const CartItem = ({articulo,eliminarArticulo}) => {

  return (
    <div className='carrito-item'>

      <h3>{articulo.articulo.nombre}</h3>

      <img src={articulo.articulo.img} alt={articulo.articulo.nombre} />
      <p>Cantidad: {articulo.cantidad}</p>

      <p>Valor por artículo: ${articulo.articulo.precio}</p>

      <button onClick={() => eliminarArticulo(articulo.articulo.id)}>Eliminar artículo</button>

    </div>


  )
}

export default CartItem;