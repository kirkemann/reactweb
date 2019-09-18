import React from 'react';

const Messenger = () => {
    return ( 
        <div className="container pt-3">
            <div className="row">
                <div className="col-12 text-left">
                    <h2>SEND EN BESKED</h2>
                    <label>Navn:</label>
                    <input className="col-12 bg-danger" type="email"/>
                    <label>Email:</label>
                    <input className="col-12 bg-danger" type="text"/>
                    <label>Telefonnr:</label>
                    <input className="col-12 bg-danger" type="text"/>
                    <label>Besked:</label>
                    <textarea className="col-12 bg-danger" name="Besked" id="" cols="30" rows="7"></textarea>
                    <button className="btn btn-secondary my-2 my-sm-0">Send Besked</button>
                </div>
            </div>
        </div>
     );
}
 
export default Messenger;