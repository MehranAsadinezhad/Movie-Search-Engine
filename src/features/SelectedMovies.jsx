import React from 'react'

export default function SelectedMovies({ selectedMovies, onDeleteMovie }) {

  return (
    <ul className='divide-y divide-stone-600'>
      {selectedMovies.map((movie) => <li
        className='flex items-center p-3 space-x-6 md:p-4 
         transition-all duration-200' movie={movie} key={movie.imdbID}>
        <img src={movie.Poster} alt={movie.imdbID} className='w-14 h-20'></img>
        <div className='w-full'>
          <h1 className='text-white md:text-xl lg:text-lg font-bold mb-3'>{movie.Title}</h1>
          <div className='flex justify-between'>
            <div className='flex space-x-3 md:space-x-8'>
              <h3 className='text-white'>⭐ {movie.imdbRating} </h3>
              <h3 className='text-white'>⏳ {movie.Runtime} </h3>
            </div>
            <div>
              <button className='text-white bg-purple-500 transition-colors 
            md:rounded-md md:text-lg lg:text-base rounded-2xl hover:bg-stone-300'
                onClick={() => onDeleteMovie(movie.imdbID)}>✖️</button>
            </div>
          </div>

        </div>
      </li>)}
    </ul >
  )
}
