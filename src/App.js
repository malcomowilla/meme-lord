import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Memes from './components/memes/Meme'
import UpdateMemes from "./components/memes/UpdateMemes";

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/memes" element={<Memes/>}>
          </Route>
          <Route exact path="/update" element={<UpdateMemes/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
