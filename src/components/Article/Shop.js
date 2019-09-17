import React from 'react';
import Menubar from './Menubar'
import Product from './Product'


const Shop = () => {
    return ( 
        <section className="shop d-flex container">
            
            <Menubar className="position-relative" />
            
            <Product />
            
        </section>
     );
}
 
export default Shop;