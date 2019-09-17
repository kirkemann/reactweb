import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/section';
import Main from './components/Main/main';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Main />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
