import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home';
import Events from './components/Main/Events';
import Shop from './components/Article/Shop';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/Events' component={Events} />
        <Route path='/Shop' component={Shop} />
        <Route path='/Footer' component={Footer} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
