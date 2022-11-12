import React from 'react'

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-white py-4 fixed-bottom">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="small text-muted mb-0">© Olink. 2020 wrapbootstrap.</p>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <Link className="btn btn-sm btn-light" to="#">
                                <span className="feather-facebook"></span>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link className="btn btn-sm btn-light" to="#">
                                <span className="feather-youtube"></span>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link className="btn btn-sm btn-light" to="#">
                                <span className="feather-twitter"></span>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link className="btn btn-sm btn-light" to="#">
                                <span className="feather-github"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;