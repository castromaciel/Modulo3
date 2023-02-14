const Navbar = ({ name }) => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">{ name }</a>
      </div>
    </nav>
  )
}

export default Navbar
