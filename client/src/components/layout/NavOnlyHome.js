import React from 'react'

import { Link } from "react-router-dom";

function NavOnlyHome() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white osahan-nav-top py-4 fixed-top">
            <div className="container">
                <Link className="navbar-brand mr-2" to="/"><img src="img/logo.svg" alt="" /> <span className="small ml-3">Home</span>
                </Link>
            </div>
        </nav>
    );
}

export default NavOnlyHome;