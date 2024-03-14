  import React, { useState, useEffect} from 'react';
  import ItemDetail from '../ItemDetail/ItemDetail';
  import { useParams } from 'react-router-dom';
  import { db } from '../../firebase/config';
  import { doc,getDoc } from 'firebase/firestore';
  import './ItemDetailContainer.css'

  const ItemDetailContainer = () => {
    const [articulo, setArticulo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      const nuevoDoc = doc(db,"Prendas",id)
      getDoc(nuevoDoc).then(respuesta => {
        const data = respuesta.data()
        const nuevoArticulo = {id: respuesta.id,...data}
        setArticulo(nuevoArticulo)

      })

      .catch(error => console.log(error))
    }, []);

    return (
      <div className='detalle-carrito'>
        <ItemDetail articulo={articulo} />
      </div>
    );
  };

  export default ItemDetailContainer
