import './App.css';
import { useEffect } from 'react';
import SearchIcon from './search.svg';
//4d2b405a

const API_URL = 'http://www.omdbapi.com?apikey=4d2b405a';

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}
const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`$(API_URL)&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }
  useEffect (() => {
      searchMovies('Spiderman');
  }, [])

  return (
    <div className="app">
      <h1>Movie-Search</h1>
      <div className="search">
        <input 
         placeholder='Search for movies'
         value=""
         onChange={() => {}} />
        <img 
          src ={SearchIcon} 
          alt="search"
          onClick={() => {}}/>
      </div>
      
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt ="movie img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
