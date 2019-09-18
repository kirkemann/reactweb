import React, { useState } from 'react';

const Product = () => {

    const [shoes]= useState([
        {shoe: 'shoe_01.jpg', producttext: 'Puma Highland 3000 - brown', id: 1},
        {shoe: 'shoe_02.jpg', producttext: 'Asics Free Street', id: 2},
        {shoe: 'shoe_03.jpg', producttext: 'New Balance Runner Bounce', id: 3},
        {shoe: 'shoe_01.jpg', producttext: 'New Balance Runner Bounce', id: 4},
        {shoe: 'shoe_03.jpg', producttext: 'New Balance Runner Bounce', id: 5},
        {shoe: 'shoe_04.jpg', producttext: 'New Balance New York 2018', id: 6}
    ]);

    return ( 
        
                
                <div className="shoe-list pt-5 ">
                    <div className="products d-flex col-12 col-lg-9 col-md-9">
                    <h2 className="shopsec bg-secondary text-light pl-3 w-50 position-absolute">SHOP</h2>
                    {shoes.map(s => {
                        return ( 
                            <div className="text-center  product border m-2">
                                <img className="img-fluid" src={"/img/" + s.shoe} alt="sko"/>
                                <p> {s.producttext} </p>
                            </div>
                         );
                    })}
                    </div>
                </div>
                    
     );
}
 
export default Product;