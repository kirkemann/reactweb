import React from 'react';
import Map from './Maps';
import Messenger from './Messenger';


const Footer = () => {
    return ( 
        <section className="d-flex container">
            <Map className="col-12" />
            <Messenger className="col-12" />

        </section>

              
     );
}
 
export default Footer;