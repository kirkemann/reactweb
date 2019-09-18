import React from 'react';
import Map from './Maps';
import Messenger from './Messenger';


const Footer = () => {
    return ( 
        <section className=" container  d-flex footer">
            <Map className="col-12" />
            <Messenger className="col-lg-12 col-md-9" />

        </section>

              
     );
}
 
export default Footer;