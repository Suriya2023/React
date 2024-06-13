import React from 'react'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.heading}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.mode === 'black' ? 'yellow' : 'red'}`}>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">{props.AboutText}</a>
                        </li>

                        <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                         Theme
                        </button>
                        <ul className="dropdown-menu" id="cir">
                           <div className="circle-1" onClick={props.redToggle}><p className="font-1">Red</p></div>
                           <div className="circle-2" onClick={props.greenToggle}><p className="font-2">Green</p></div>
                           <div className="circle-3" onClick={props.purpleToggle}><p className="font-3">Purple</p></div>
                           <div className="circle-4" onClick={props.yellowToggle}><p className="font-4">O & Y</p></div>
                           <div className="circle-5" onClick={props.blueToggle}><p className="font-5">Blue</p></div>
                           <div className="circle-6" onClick={props.grayToggle}><p className="font-6">Gray</p></div>


                           
                        </ul>
                    </div>
                    </ul>
                   
                    <form className="d-flex" role="search">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />{props.btnText}
                        </div>
                    </form>
                </div>
            </div>
        </nav>

    )
}