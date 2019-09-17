import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/section';
import Main from './components/Main/main';
import Shop from './components/Article/Shop';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Main />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
