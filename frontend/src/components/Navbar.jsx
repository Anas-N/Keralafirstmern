import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import Darkmode from './Darkmode'

const Navbar = () => {
  return (
    <>
     
    <nav className="container navbar navbar-expand-lg navbar-light bg-white sticky-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"
              ><img src="logo.webp" alt="logo img" style={{width:"60px"}}
            /></NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              
              <ul className="navbar-nav ms-auto">
              
              
                <li className="nav-item">
                  
                  <NavLink
                    className="asdf nav-link active fw-bold"
                    aria-current="page"
                    to="/"
                    >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="asdf nav-link active fw-bold"
                    aria-current="page"
                    to="/Contactus"
                    >ContacUs</NavLink>
                </li>
                <li className="nav-item">
                  
                <Darkmode/>
                </li>
              </ul>
              <div className="nav-link navbar-nav ms-3 d-none d-sm-block">
                <NavLink to="/Register" className="btn btn-sm btn-dark mb-0"
                   style={{color:"white"}}>Register</NavLink>
              </div>
            </div>
          
          </div>
        </nav>
    
    
    </>
  )
}

export default Navbar
