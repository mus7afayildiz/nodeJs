import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import WorldDigitalClock from './components/WorldDigitalClock';
import ClockComponent from './components/ClockComponent';



function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <WorldDigitalClock></WorldDigitalClock>
      <ClockComponent></ClockComponent>
    </div>
  );
}

export default App;
