import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ name }) => {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <nav className="navbar bg-custom">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" exact to="/">{ name }</Link>
        
        {/* TODO: Crear rutas de login y registro */}
        <Link className="navbar-brand text-white" to="/">Registro</Link>
        <Link className="navbar-brand text-white" to="/">Login</Link>
        
      </div>
    </nav>
  )
}

export default Navbar
