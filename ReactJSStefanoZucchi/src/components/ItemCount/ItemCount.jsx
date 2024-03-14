import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({initial,stock,onAdd}) => {

    const [contador,setContador] = useState(1);
    
    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)

        }
    }

    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    const agregarCarrito = () => {
        onAdd(contador)
    }

  return (
    <div className='contador'>

        <p>Cantidad de Artículos: {contador} </p>
        <div className='contador-botones'>
            
        <button className='sumaresta' onClick={incrementar}>+</button>

        <button className='sumaresta' onClick={decrementar}>-</button>

        <button onClick={agregarCarrito}>Agregar al Carrito</button>
        </div>

    </div>
  )
}

export default ItemCount