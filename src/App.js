import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Memes from './components/memes/Meme'
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import Addmeme from './components/addmeme/addmeme';
=======
import AddMeme from "./components/addmeme/AddMeme";
>>>>>>> origin/developer
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
          <Route exact path="/add" element={<AddMeme/>}></Route>
          <Route exact path="/update" element={<UpdateMemes/>}></Route>
          <Route exact path="/updated" element={<UpdatedMeme />}></Route>
        </Routes>
>>>>>>> origin/addmeme
    </div>
  );
}

export default App;
