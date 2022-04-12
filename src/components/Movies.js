import React from 'react'
import Row from '../Row';
import requests from '../requests';
import Nav from './Nav'
import Footer from './Footer';

function Movies() {
  return (
    <div>
      <Nav />

      <Row title="Funny Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>

      <Footer />
    </div>
  )
}

export default Movies;