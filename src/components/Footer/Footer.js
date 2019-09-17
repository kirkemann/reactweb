import React from 'react';
import Maps from '../img/map.JPG';

const Footer = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                <img className="img-fluid" src={Maps} alt="Maps"/>
                <h2 className="contacttext text-right text-dark pr-4 w-75 position-absolute">Contact</h2>
                </div>

                <div className="col-6 d-block text-center">
                    <h2>SEND EN BESKED</h2>
                    <label>Navn:</label>
                    <input type="email"/>
                    <label>Email:</label>
                    <input type="text"/>
                    <label>Telefonnr:</label>
                    <input type="text"/>
                    <label>Besked:</label>
                    <input type="textarea"/>
                    <button className="bg-dark text-light">Send Besked</button>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;