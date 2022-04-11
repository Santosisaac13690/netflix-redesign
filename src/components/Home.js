import React from 'react';
import Row from '../Row';
import requests from '../requests';
import Nav from './Nav'
import Footer from './Footer';

function Home() {
  return (
    <>
        <Nav />
        
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Funny Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="TV Shows" fetchURL={requests.fetchTVShows}/>

        <Footer />

    </>
  )
}

export default Home;