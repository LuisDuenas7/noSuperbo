import React from 'react';
import Home from "./component/Home";
import Media from './component/Media';
import Us from './component/Us';
import Contact from './component/Contact';
import './App.css';
import Header from './component/Header';


const App=()=>{
    return (
      <div className='main' >
        <Header/>
        <Home/>
        <Media/>
        <Us/>
        <Contact/>
      
      </div>
    );
  }

export default App;
