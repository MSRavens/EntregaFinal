import React, {useContext, useState} from 'react';
import { db } from '../../firebase/config';
import { collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import './Checkout.css';

const CheckOut = () => {

    const {cart,totalCarrito,cantidadCarrito,vaciarCarrito} = useContext(CartContext)

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [idOrden,setidOrden] = useState("")

    const manejadorFormulario = (event) => {

        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor completa los campos obligatorios")
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los e-mails no coinciden")
            return;}

        const orden = {
            items: cart.map((articulo) => ({
                id: articulo.articulo.id,
                nombre: articulo.articulo.nombre,
                cantidad: articulo.cantidad})),


            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async (articuloOrden) => {
                const articuloRefe = doc(db,"Prendas",articuloOrden.id);
                const articuloDoc = await getDoc(articuloRefe)
                const stockActual = articuloDoc.data().stock

                await updateDoc(articuloRefe, {
                    stock: stockActual - articuloOrden.cantidad
                })
            })
        )
        .then(() => {
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef) => {
                setError("")
                setidOrden(docRef.id)
                vaciarCarrito()
            })


            .catch((error) => {
                console.log(error)
                setError("Hubo un error al crear la orden")
            })

        })
        .catch((error) => {
            console.log(error)
            setError("No es posible actualizar el stock")
        })
    }

    return (
        <div>

            <h1 className='h1CheckOut'>Ingresa tus datos</h1>

            <form onSubmit={manejadorFormulario}>

                {cart.map((articulo) => (

                <div key={articulo.articulo.id}>

                        <p>
                            {""}
                            {articulo.articulo.nombre} x {articulo.cantidad}
                        </p>
                        <hr/>

                    </div> 
                ))}

               
               
                <div >

                    <div>
                        <label htmlFor="Nombre">Nombre</label>
                        <br />
                        <input name="Nombre" type='text' onChange={(e) => setNombre(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Apellido">Apellido</label>
                        <br />
                        <input name="Apellido" type='text' onChange={(e) => setApellido(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Telefono">Teléfono</label>
                        <br />
                        <input name="Teléfono" type='text' pattern='[0-9 ()+.-]*' onChange={(e) => setTelefono(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="Email">E-mail</label>
                        <br />
                        <input name="Email" type='email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="EmailConfirmacion">Confirmá tu e-mail</label>
                        <br />
                        <input name="EmailConfirmacion" type='email' onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                    </div>

                    <button type='submit'>Finalizar Compra</button>

                    {error && <p>{error}</p>}

                    {idOrden && (
                        <h1>
                            Muchas gracias por confiar en nosotros y realizar tu compra! Tu número de orden es el siguiente: {idOrden}
                        </h1>
                    )}

                </div>
                
            </form>
        </div>
    );
};

export default CheckOut;