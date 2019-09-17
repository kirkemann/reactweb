import React from 'react';
import RunInc from '../img/runinc_logo.svg';

const Navbar = () => {
    return ( 
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <a className="navbar-brand" href="/">hej<img src={RunInc} alt="runins"/>hej</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Main">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Article">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Footer">Contact Us</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;