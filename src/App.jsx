import { useEffect, useState } from 'react';
import './App.css'
import SearchBar from './features/SearchBar'
import SearchedMoviesBox from './features/SearchedMoviesBox';
import WatchedMoviesBox from './features/WatchedMoviesBox';

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData =
// {
//   imdbID: "tt1375666",
//   Title: "Inception",
//   Year: "2010",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   runtime: 148,
//   imdbRating: 8.8,
//   userRating: 10,
// };

const KEY = "df2eaa5b";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`http://www.omdbapi.com/?apikey=6c0b3a2d&s=${query}`);
        if (!res.ok) throw new Error("something went wrong with fetching");

        const data = await res.json();
        console.log(data);
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
  }, [query])

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <div className='flex items-center justify-center space-x-8'>
        <SearchedMoviesBox movies={movies} error={error}
          isLoading={isLoading} />
        <WatchedMoviesBox watchedMovies></WatchedMoviesBox>
      </div>

    </>
  )
}

export default App
