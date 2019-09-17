import React from 'react';
import Maps from '../img/map.JPG';

const Footer = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                <img className="img-fluid" src={Maps} alt="Maps"/>
                <h2 className="contacttext text-right text-dark pr-4 w-75 position-absolute">Contact</h2>
                <div className="center text-center pt-3 pb-3 bg-secondary">
                    <h2 className="text-light">RUNINC</h2>
                    <p className="text-light">Kannikgade 12</p>
                    <p className="text-light">8000 Århus C</p>
                    <p className="text-light">Telefon 26 13 26 96</p>
                    <p className="text-light">info@runinc.dk</p>

                </div>
                </div>

                <div className="col-6 text-left">
                    <h2>SEND EN BESKED</h2>
                    <label>Navn:</label>
                    <input className="col-12 bg-danger" type="email"/>
                    <label>Email:</label>
                    <input className="col-12 bg-danger" type="text"/>
                    <label>Telefonnr:</label>
                    <input className="col-12 bg-danger" type="text"/>
                    <label>Besked:</label>
                    <input className="col-12 bg-danger" type="textarea"/>
                    <button className="btn btn-secondary my-2 my-sm-0">Send Besked</button>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;