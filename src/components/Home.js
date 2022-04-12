import React from 'react';
import Row from '../Row';
import requests from '../requests';
import Nav from './Nav'
import Footer from './Footer';
import Banner from './Banner';

function Home() {
  return (
    <>
        <Nav />
        <Banner />
        
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
        <Row title="Funny Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        <Row title="Action" fetchURL={requests.fetchActionMovies}/>
        <Row title="Documentaries" fetchURL={requests.fetchDocumantaries}/>

        <Footer />

    </>
  )
}

export default Home;