import { useEffect, useState } from 'react';
import './App.css'
import SearchBar from './features/SearchBar'
import SearchedMoviesBox from './features/SearchedMoviesBox';
import WatchedMoviesBox from './features/WatchedMoviesBox';

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [add, setAdd] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`http://www.omdbapi.com/?apikey=6c0b3a2d&s=${query}`);
        if (!res.ok) throw new Error("something went wrong with fetching");

        const data = await res.json();
        if (data.Response === "False") throw new Error("movie not found");

        setMovies(data.Search)
      }
      catch (err) {
        setError(err.message);
      }
      finally {
        setIsLoading(false)
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return
    }
    fetchMovies()
  }, [query]);


  useEffect(() => {
    if (!selectedMovie) return;
    document.title = `Movie: ${selectedMovie}`

    return function(){
      document.title = "MovieSearchEngine"
    }
  }, [selectedMovie]);

  function handleSelectedMovie(id, title) {
    setSelectedId(id);
    setAdd(false);
    setSelectedMovie(title);
  }
  console.log(selectedMovie);

  function handleAddMovie(movie) {
    setSelectedMovies([...selectedMovies, movie]);
    setAdd(true);
  }

  function handleDeleteMovie(id) {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((movie) => movie.imdbID !== id))
  };

  return (
    <>
      <SearchBar movies={movies} query={query} setQuery={setQuery} />
      <div className='flex items-center justify-center space-x-8'>
        <SearchedMoviesBox movies={movies} error={error}
          isLoading={isLoading} onHandleSelectedMovie={handleSelectedMovie} />
        <WatchedMoviesBox selectedId={selectedId}
          add={add} onAddMovie={handleAddMovie}
          selectedMovies={selectedMovies} setAdd={setAdd}
          onDeleteMovie={handleDeleteMovie} setSelectedMovie={setSelectedMovie}
        />
      </div>
    </>
  )
}

export default App
