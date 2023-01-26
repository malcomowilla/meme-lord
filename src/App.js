import React from "react";
import Home from './components/home/Home'
import Memes from './components/memes/Meme'
import MemeGenerated from "./components/memes/MemeGenerated/MemeGenerated"
import {BrowserRouter,} from 'react-router-dom'
function App() {
  return (
    <div>
      
      <BrowserRouter exact path='/'>
      
      
      <Memes/>
      </BrowserRouter>
      
      <BrowserRouter exact path ='/generated'>
      
      <MemeGenerated/>
      </BrowserRouter>
    </div>
  );
}

export default App;
