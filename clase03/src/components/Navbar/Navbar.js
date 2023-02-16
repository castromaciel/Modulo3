import { useState } from 'react'
import './navbar.css'

const Navbar = ({ name }) => {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <nav className="navbar bg-custom">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">{ name }</a>
        {
          isLogged
          ? <button className='btn btn-danger' onClick={() => setIsLogged(false)}>Cerrar Sesión</button>
          : <button className='btn btn-primary' onClick={() => setIsLogged(true)}>Iniciar sesion</button>
        }
      </div>
    </nav>
  )
}

export default Navbar
