import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TVshows from "./components/TVshows";
import Newandpopular from "./components/Newandpopular";
import Movies from "./components/Movies";
import Mylist from "./components/Mylist";
import Login from './components/Login';
import PopUpLogin from './components/Popuplogin';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/popuplogin" element={<PopUpLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tvshows" element={<TVshows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/newandpopular" element={<Newandpopular />} />
          <Route path="/mylist" element={<Mylist />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
