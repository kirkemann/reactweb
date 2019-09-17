import React, { useState } from 'react';

const Product = () => {

    const [shoes]= useState([
        {shoe: 'shoe_01.jpg', producttext: 'Puma Highland 3000 - brown', id: 1},
        {shoe: 'shoe_02.jpg', producttext: 'Asics Free Street', id: 2},
        {shoe: 'shoe_03.jpg', producttext: 'New Balance Runner Bounce', id: 3},
        {shoe: 'shoe_01.jpg', producttext: 'New Balance Runner Bounce', id: 3},
        {shoe: 'shoe_03.jpg', producttext: 'New Balance Runner Bounce', id: 3},
        {shoe: 'shoe_04.jpg', producttext: 'New Balance New York 2018', id: 4}
    ]);

    return ( 
        <div className="container">
                
                <div className="shoe-list position-absolute col-2">
                    <div>
                    {shoes.map(s => {
                        return ( 
                            <div className="text-center shoeinfo border table-hover">
                                <img className="img-fluid" src={"/img/" + s.shoe} alt="sko"/>
                                <p> {s.producttext} </p>
                            </div>
                         );
                    })}
                    </div>
                </div>
                
            
        </div>    
     );
}
 
export default Product;