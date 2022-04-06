import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import TVshows from './components/TVshows';
import Newandpopular from './components/Newandpopular';
import Movies from './components/Movies';
import Mylist from './components/Mylist';

function App() {
  return (
     <div className="App">
       <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/tvshows" element={<TVshows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/newandpopular" element={<Newandpopular />} />
            <Route path="/mylist" element={<Mylist />} />
        </Routes>
      </BrowserRouter>

     {/* <p>test</p>
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchURL={requests.fetchTrending}/> */}

    </div>
  );
}

export default App;
