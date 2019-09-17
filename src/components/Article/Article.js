import React from 'react';

const Article = () => {
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

                </div>
            </div>
        </div>    
     );
}
 
export default Article;