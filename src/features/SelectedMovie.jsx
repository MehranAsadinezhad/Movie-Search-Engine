import React, { useEffect, useState } from 'react'

export default function SelectedMovie({ selectedId, add, selectedMovies,
  onAddMovie, setAdd, setSelectedMovie }) {

  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=6c0b3a2d&i=${selectedId}`)
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
  const isSelected = selectedMovies.filter((movie) => movie.imdbID === selectedId)

  return (
    <>
      {!add && !isLoading && <>
        <div className='flex bg-midPurple space-x-4 items-center'>
          <div className='relative'>
            <button className='bg-midPurple p-1 md:px-2 md:py-1 
            text-white absolute rounded-r-md hover:bg-darkPurple'
              onClick={() => {
                setAdd(true)
                setSelectedMovie("")
              }}>Back</button>
            <img src={poster} alt={imdbRating}
              className='w-32 h-44 md:w-36 md:h-48'></img>
          </div>
          <div className='space-y-2 md:space-y-4 flex flex-col justify-between'>
            <h1 className='text-white 
            font-bold md:text-xl lg:text-lg'>{title}</h1>
            <h3 className='text-stone-300'>{released}〰⏲️{runtime}</h3>
            <h3 className='text-stone-300'>{genre}</h3>
            <h3 className='text-stone-300'>⭐{imdbRating} IMDB rating</h3>
          </div>
        </div>
        <div className='wrap flex flex-col justify-center 
      items-center bg-lightPurple rounded-lg w-40 md:w-72 mt-5 mx-auto 
      p-2 md:p-3 space-y-4'>

          {!isSelected.length ? <button className='bg-gradient-to-r from-purple-600 to-purple-800 p-3
        rounded-full md:w-full text-white font-semibold
        hover:bg-gradient-to-r hover:from-purple-800
        hover:to-purple-900 transition-colors duration-500'
            onClick={handleAdd}>➕ Add to list</button> :
            <p className='text-white md:text-lg'>⚠️ you have already selected this movie</p>}
        </div>
        <div className='m-4 md:space-y-3 md:m-7 text-stone-300 md:font-semibold'>
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
