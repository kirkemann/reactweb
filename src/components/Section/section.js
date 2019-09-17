import React from 'react';
import Hero from '../img/hero.jpg'

const Section = () => {
    return ( 
        <div className="container">
            <img class="img-fluid" src={Hero} alt="Løber-i-naturen"/>
            <h2 className="texth2 bg-dark text-light pl-3 w-25 pt-2 position-absolute">WE LOVE <span>RUNING</span></h2>
        </div>
     );
}
 
export default Section;