import React from 'react';
import { Footer, Blog, Possibility, Features, Header, WhatGPT3 } from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      <Brand />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
