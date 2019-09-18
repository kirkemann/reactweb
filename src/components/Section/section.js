import React from 'react';
import Hero from '../img/hero.jpg'

const Section = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
            <img class="img-fluid" src={Hero} alt="Løber-i-naturen"/>
            <h2 className="texth2 bg-secondary text-light pl-3 w-50 pt-2 position-absolute">WE LOVE <span>RUNNING</span></h2>
            </div>
            </div>
        </div>
     );
}
 
export default Section;