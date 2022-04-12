import React from 'react';
import Row from '../Row';
import requests from '../requests';
import Nav from './Nav'
import Footer from './Footer';

function Newandpopular() {
  return (
    <div>
      <Nav />

      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="New & Popular Movies" fetchURL={requests.fetchMovieDiscover}/>
      <Row title="New & Popular Shows" fetchURL={requests.fetchShowsDiscover}/>

      <Footer />
    </div>
  )
}

export default Newandpopular;