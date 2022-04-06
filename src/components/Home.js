import React from 'react';
import Row from '../Row';
import requests from '../requests';
import Nav from './Nav'

function Home() {
  return (
    <>
        <Nav />
        
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
    </>
  )
}

export default Home;