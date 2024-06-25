import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
        <div className="container-fluid bg- mx-5 ">
          <Link className="navbar-brand" to="#">{props.Title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/privecyPolicy" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Privacy Policy
                </Link>
                <ul className="dropdown-menu">
                  <li><link className="dropdown-item" to="#">Action</link></li>
                  <li><link className="dropdown-item" to="#">Another action</link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><link className="dropdown-item" to="/">Something else here</link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className={`form-check form-switch  text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />{props.setBtn}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
