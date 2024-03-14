import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({articulos}) => {
  return (

    <div className='detalle-carrito'>
      {articulos.map((articulo) => {
        return (
          <Item key={articulo.id} articulo={articulo} />
        )
      })

      }

    </div>

  )
}

export default ItemList
