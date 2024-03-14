import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({articulo}) => {
  return (

    <Link to={`/detalle/${articulo.id}`}>
      
    <div key={articulo.id} className='ficha-producto'>
        <img src={articulo.img} alt={articulo.nombre}/>
        <h2>{articulo.nombre}</h2>
    </div>  
    
    </Link>
    
    )
}

export default Item