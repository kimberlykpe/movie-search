import './App.css';
import { useEffect } from 'react';

//4d2b405a
//commit
const APT_URL = 'http://www.omdbapi.com?apikey=4d2b405a';

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
    <div className="App">
      <h1>Movie-Search</h1>
    </div>
  );
}

export default App;
