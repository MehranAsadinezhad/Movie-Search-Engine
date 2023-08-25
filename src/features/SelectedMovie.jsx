import React, { useEffect, useState } from 'react'

export default function SelectedMovie({ selectedId, add, selectedMovies,
  onAddMovie, setAdd }) {

  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=6c0b3a2d&i=${selectedId}`)
      const data = await res.json();
      setIsLoading(false)
      setMovie(data)
    }
    getMovieDetails()
  }, [selectedId, setIsLoading])

  const {
    Poster: poster,
    Title: title,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    onAddMovie(movie);
  }
  const isSelected = selectedMovies.filter((movie)=>movie.imdbID === selectedId)

  return (
    <>
      {!add && !isLoading && <>
        <div className='flex bg-midPurple space-x-4 items-center'>
          <div className='relative'>
            <button className='bg-midPurple px-2 py-1 
            text-white absolute rounded-r-md hover:bg-darkPurple'
            onClick={()=>setAdd(true)}>Back</button>
            <img src={poster} alt={imdbRating}
              className='w-36 h-48'></img>
          </div>
          <div className='space-y-4 flex flex-col justify-between'>
            <h1 className='text-white 
            font-bold text-lg'>{title}</h1>
            <h3 className='text-stone-300'>{released}〰⏲️{runtime}</h3>
            <h3 className='text-stone-300'>{genre}</h3>
            <h3 className='text-stone-300'>⭐{imdbRating} IMDB rating</h3>
          </div>
        </div>
        <div className='wrap flex flex-col justify-center 
      items-center bg-lightPurple rounded-lg m-7 p-3 space-y-4'>

          {!isSelected.length ? <button className='bg-gradient-to-r from-purple-600 to-purple-800 p-3
        rounded-full w-full text-white font-semibold
        hover:bg-gradient-to-r hover:from-purple-800
        hover:to-purple-900 transition-colors duration-500'
            onClick={handleAdd}>➕ Add to list</button> :
            <p className='text-white'>⚠️ you have already selected this movie</p>}
        </div>
        <div className='space-y-3 m-7 text-stone-300 font-semibold'>
          <h3 className='italic'>{plot}</h3>
          <h3>Starring {actors}</h3>
          <h3>Directed by {director}</h3>
        </div>
      </>}
      {isLoading && <p className='text-white text-center
              font-semibold text-2xl mt-24 tracking-wider'>⏳ Loading...</p>}
    </>
  )
}
