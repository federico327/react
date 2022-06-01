import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-secondary

">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    {/* img */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/paginas/inicio'>inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/paginas/nosotros'>nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/paginas/tienda'>tienda</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default navbar