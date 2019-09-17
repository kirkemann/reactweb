import React from 'react';
import Menubar from './Menubar'
import Product from './Product'


const Shop = () => {
    return ( 
        <section className="shop position-relative row">
            
                <h2 className="shopsec bg-secondary text-light pl-3 w-25 position-absolute">SHOP</h2>
            
            <Menubar className="col-lg-2" />
            <Product className="col-lg-10" />
        </section>
     );
}
 
export default Shop;