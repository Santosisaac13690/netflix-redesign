import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
     <div className="App">
       <BrowserRouter>
        <Routes>
            <Route index element={<Nav />} />
            <Route path="/" element={<Apparel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

      <p>test</p>
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchURL={requests.fetchTrending}/>

    </div>
  );
}

export default App;
