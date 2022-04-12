import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Row from '../Row';
import requests from '../requests';

function TVshows() {
  return (
    <div>
      <Nav />
      
      <Row title="Popular Shows" fetchURL={requests.fetchPopularShows}/>
      <Row title="Top Rated Shows" fetchURL={requests.fetchTopRatedShows}/>
      <Row title="TV Shows" fetchURL={requests.fetchTVShows}/>

      <Footer />
    </div>
  )
}

export default TVshows;