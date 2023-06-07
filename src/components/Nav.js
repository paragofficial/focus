import React from 'react'
import { Link } from "react-router-dom";

export default function nav() {
    return (
        <>
            {/* // < !--Navbar -- > */}
            <nav id="navbar_top" className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <Link className="navbar-brand" to="#">
                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu01i5r_V30CkDBsorNL-2hduxYb1H96dIWg&usqp=CAU" alt="ROBOLOGO" style={{maxWidth: "40px", maxHeight: "40px"}}></img></Link> */}
                        <img src="https://static.vecteezy.com/system/resources/previews/010/434/272/original/artificial-intelligence-glyph-icon-silhouette-symbol-robot-human-head-with-chip-digital-network-robotics-negative-space-isolated-illustration-vector.jpg" alt="ROBOLOGO" style={{maxWidth: "40px", maxHeight: "40px", borderRadius: "200px"}}></img></Link>
                       
                        
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Roboclub</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/achievements">Achievements</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/participation">Participation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className="d-flex align-items-center">
                        {/* <!-- Icon --> */}

                        <a className="btn btn-primary mx-2" target="_blank" style={{ backgroundColor: "#0082ca" }} href="https://www.instagram.com/anushkasharma/?hl=en" role="button"
                        ><i className="bi bi-linkedin"></i></a>

                        <a className="btn btn-primary mx-2" target="_blank" style={{backgroundColor: "#ac2bac"}} href="https://www.instagram.com/virat.kohli/?hl=en" role="button"
                        ><i className="bi bi-instagram"></i></a>
                       

                    
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!--Navbar --> */}
        </>
    )
}
