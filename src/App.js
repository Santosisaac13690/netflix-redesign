import './App.css';
import Row from './Row';
import requests from './requests';
import Showandhide from './Showandhide';
import Profile from './pages/profile';



function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<profile />} />
      <p>test</p>
      <Showandhide/>
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/> 
     <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
     <Row title="Funny Movies" fetchURL={requests.fetchComedyMovies}/>

    </Routes>
    </Router>
    </>
  );
}

export default App;
