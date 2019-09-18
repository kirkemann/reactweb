import React from 'react';
import Eventspic from '../img/event.jpg'

const Events = () => {
    return ( 

        <div className="container pt-3">
            <div className="row">
                <div className="eventpic col-12 col-lg-9">
                    <img className="img-fluid" src={Eventspic} alt=""/>
                    <h2 className="eventtext bg-secondary text-right text-light pr-4 w-50 pt-2 position-absolute">NEXT EVENT</h2>
                </div>
                <div className="etext pt-5 col-12 col-lg-3">
                    <h3>EVENTS</h3>
                    <h4>COPENHAGEN <br/>MARATON</h4>
                    <p>Den 29. maj 2018</p>
                    <h5>AARHUS CITY RUN</h5>
                    <p>Den 1. juni 2018</p>
                    <h5>BERLIN MARATON</h5>
                    <p>Den 6. juni 2018</p>
                </div>

            </div>
        </div>
     );
}
 
export default Events;