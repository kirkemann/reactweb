import React from 'react';
import RunInc from '../img/runinc_logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <a className="img navbar-brand" href="/"><img src={RunInc} alt="runins"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Events">Event</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Shop">Shop</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Footer">Contact Us</NavLink>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input className="form-control bg-danger mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;