import './App.css';
import Row from './Row';
import requests from './requests';
import Showandhide from './Showandhide';


function App() {
  return (
    <div className="App">
      <p>test</p>
      <Showandhide/>
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/> 
     <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
     <Row title="Funny Movies" fetchURL={requests.fetchComedyMovies}/>

    </div>
  );
}

export default App;
