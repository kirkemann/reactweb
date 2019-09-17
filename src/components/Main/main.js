import React from 'react';
import Events from '../img/event.jpg'

const Main = () => {
    return ( 
        <div className="container">
            <div className="row">
            <div className="col-9">
                <img className="img-fluid" src={Events} alt=""/>
                <h2 className="eventtext bg-secondary text-right text-light pr-4 w-50 pt-2 position-absolute">NEXT EVENT</h2>
            </div>
            <div className="col-3">
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
 
export default Main;