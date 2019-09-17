import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/section';
import Main from './components/Main/main';
import Article from './components/Article/Article';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Main />
      <Article />
    </div>
  );
}

export default App;
