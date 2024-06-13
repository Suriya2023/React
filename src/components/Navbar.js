import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav class={`navbar navbar-expand-lg  bg-${props.mode}  navbar-${props.mode}`} id='Surajyy'>
                <div class={"container-fluid"}>
                    <a class="navbar-brand" href="#">{props.Mytitle}</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" onClick = {props.ToggleTheam}  id="flexSwitchCheckDefault" />{props.thisBtn}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
