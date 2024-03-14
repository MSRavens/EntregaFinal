import React from 'react'
import './Navbar.css'
import { Link,NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div className='Navbar'>
    <Link to ={'/'}>   
    <h1>GeoClothes</h1>
    </Link> 

    <ul className='Navbar-ul'>

        <li>
          <NavLink to='/categoria/Mujeres'>Ropa Mujeres</NavLink>
        </li>
        <li>
          <NavLink to='/categoria/Hombres'>Ropa Hombres</NavLink>
        </li>
        <li>
          <NavLink to='/categoria/Bebes'>Ropa Bebés</NavLink>
        </li>

    </ul>

    <NavLink to='/cart'><CartWidget/></NavLink> 
    
    </div>
  )
}

export default Navbar