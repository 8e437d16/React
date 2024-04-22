import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RandomImagePresenter from './components/RandomImagePresenter';

function App() {

  return (
    <div>
      <Header />
      <div style={{ width: '100%', height: '25px' }}/>
      <Footer />
      <div style={{ width: '100%', height: '50px' }}/>
      <RandomImagePresenter />
    </div>
  );
}

export default App;
