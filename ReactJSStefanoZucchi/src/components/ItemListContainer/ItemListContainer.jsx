import { useState,useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection,getDocs,query,where } from 'firebase/firestore'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

  const [articulos,setArticulos] = useState ([]);

  const {categoryId} = useParams()

  useEffect(()=>{

    const misArticulos = 
    categoryId ? query(collection(db,"Prendas"),where("categoria", "==",categoryId))
    :
    collection(db,"Prendas")

    getDocs(misArticulos)
    .then((respuesta) => {
      const nuevosArticulos = respuesta.docs.map((doc) => {
        const data = doc.data()
        return {id: doc.id,...data}
      })
      setArticulos(nuevosArticulos)
    })
    .catch((error) => console.log(error))

  },[categoryId])

  return (
    <div>
      <h1>{greeting}</h1>

      {articulos.length == 0 
      ?
      <h1>Cargando nuestras prendas!</h1> 
      : 
      <ItemList articulos={articulos}/>
      }
    </div>
  )
}

export default ItemListContainer
