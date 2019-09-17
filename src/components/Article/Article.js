import React, { useState } from 'react';

const Article = () => {

    const [shoes, setShoes]= useState([
        {shoe: 'shoe_01.jpg', producttext: 'Puma Highland 3000 - brown', id: 1},
        {shoe: 'shoe_02.jpg', producttext: 'Asics Free Street', id: 2},
        {shoe: 'shoe_03.jpg', producttext: 'New Balance Runner Bounce', id: 3},
        {shoe: 'shoe_01.jpg', producttext: 'New Balance Runner Bounce', id: 3},
        {shoe: 'shoe_03.jpg', producttext: 'New Balance Runner Bounce', id: 3},
        {shoe: 'shoe_04.jpg', producttext: 'New Balance New York 2018', id: 4}
    ]);

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-3 shoplist">
                    <h3>SHOP</h3>
                    <h4>RUNINC SHOP</h4>
                    <p>Gratis fragt ved over kr. 500,-</p>
                    <p>Nike</p>
                    <p>Adidas</p>
                    <p>Puma</p>
                    <p>Asics</p>
                    <p>Hummel</p>                   
                </div>
                <div className="col-9">
                <h2 className="shopsec bg-dark text-light pl-3 w-25  position-absolute">SHOP</h2>
                <div className="shoe-list">
                    <div>
                    {shoes.map(s => {
                        return ( 
                            <div className="text-center shoeinfo border">
                                <img className="img-fluid" src={"/img/" + s.shoe} alt=""/>
                                <p> {s.producttext} </p>
                            </div>
                         );
                    })}
                    </div>
                </div>
                </div>
            </div>
        </div>    
     );
}
 
export default Article;