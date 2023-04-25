import './App.css';
import react_img from './react.png';
import imdb_img from './imdb.png';
import { Link, Route, Routes } from 'react-router-dom';
import SearchMovies from './components/SearchMovies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <header>
        <h3>Movies & Series Info</h3>
        <div id="logos">
          <img src={imdb_img} />
          <img src={react_img} />
        </div>
      </header>
      <Routes>
        <Route path='/Movies-and-series' element={<SearchMovies/>}/>
        <Route path='/Movies-and-series/details/:id' element={<MovieDetails/>}/>
      </Routes>
      <footer>
        <p>Using <i className="fa-brands fa-react"></i> React JS & Redux JS integrated with external movies data API <a href="http://www.omdbapi.com">OMDB</a></p>
      </footer>
    </div>
  );
}

export default App;
