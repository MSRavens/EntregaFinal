import React, {useState, useContext}from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({articulo}) => {

  const [cart,setCart] = useState(false)

  const {agregarAlCarrito} = useContext(CartContext)

  const onAdd = (cantidad) => {

    setCart(true)

    agregarAlCarrito(articulo,cantidad)

  }

  return (
      
    <div>
        <img src={articulo.img} alt={articulo.nombre}/>
        <h2>{articulo.nombre}</h2>

        {articulo.stock == 0 ? <h2>Ups!No hay Stock</h2> :
        
        (cart ? <Link to={'/cart'}>Ir al Carrito</Link> : <ItemCount initial={1} stock={articulo.stock} onAdd={onAdd}/>)}

        
    </div>  
    
    )
}

export default ItemDetail;