import React from 'react';
import Maps from '../img/map.JPG';

const Map = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12 map-sec">
                    <img className="img-fluid" src={Maps} alt="Maps"/>
                    <h2 className="contacttext text-right text-dark pr-4 w-75 position-absolute">Contact</h2>
                    <div className="center text-center pt-3 pb-3 bg-secondary">
                        <h2 className="text-light">RUNINC</h2>
                        <p className="text-light">Kannikgade 12</p>
                        <p className="text-light">8000 Aarhus C</p>
                        <p className="text-light">Telefon 26 13 26 96</p>
                        <p className="text-light">info@runinc.dk</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Map;