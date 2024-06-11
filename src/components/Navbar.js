import React from 'react'

export default function Navbar(props) {
    return (
        <div className={`bg-${props.mode}   text-${props.mode === "light" ? 'dark' : 'light'} `}>


            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div class={`form-check form-switch  bg-${props.mode} text-${props.mode === "light" ? 'dark' : 'light'} `}>
                                <input class={`form-check-input text-${props.mode === "light" ? 'dark' : 'light'}`} type="checkbox" onClick={props.ToggleMode} role="switch" id="flexSwitchCheckDefault" />{props.mode}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}
