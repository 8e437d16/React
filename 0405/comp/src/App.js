import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './classComp/Header'
import Footer from './classComp/Footer'
import Main from './classComp/Main'
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <MyComponent name="HTML"/>
      <MyComponent name="Javascript"/>
      <MyComponent name="React"/>
    </div>
  );
}

export default App;
