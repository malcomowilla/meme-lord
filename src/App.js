import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Memes from './components/memes/Meme'
import Addmeme from './components/addmeme/addmeme';
import UpdateMemes from "./components/memes/UpdateMemes";
import UpdatedMeme from "./components/updatedmemes/UpdatedMeme";

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/memes" element={<Memes/>}>
          </Route>
          <Route exact path="/add" element={<Addmeme/>}></Route>
          <Route exact path="/update" element={<UpdateMemes/>}></Route>
          <Route exact path="/updated" element={<UpdatedMeme />}></Route>
        </Routes>
    </div>
  );
}

export default App;
