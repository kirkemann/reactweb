import React from 'react';
import Section from './Section/section';
import Events from './Main/Events';
import Shop from './Article/Shop';
import Footer from './Footer/Footer';

const Home = () => {
    return ( 
        <div className="container">

        <Section />
        <Events />
        <Shop />
        <Footer />
        </div>
     );
}
 
export default Home;