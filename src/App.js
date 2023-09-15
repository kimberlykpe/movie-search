import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
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
  const [movies, setMovies] = useState([]);

  const[search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const completeURL = API_URL + "&s=" + title;
    const response = await fetch(completeURL);
    const data = await response.json();

    setMovies(data.Search);
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
         value={search}
         onChange={(e) => setSearch(e.target.value)} />
        <img 
          src ={SearchIcon} 
          alt="search"
          onClick={() => searchMovies(search)}/>
      </div>

      { movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
