import React from 'react'

export default function SelectedMovies({ selectedMovies, onDeleteMovie }) {

  return (
    <ul className='divide-y divide-stone-600'>
      {selectedMovies.map((movie) => <li
        className='flex items-center space-x-6 p-4 
        transition-all duration-200' movie={movie} key={movie.imdbID}>
        <img src={movie.Poster} alt={movie.imdbID} className='w-16 h-20'></img>
        <div className='w-full'>
          <h1 className='text-white text-lg font-bold mb-3'>{movie.Title}</h1>
          <div className='flex justify-between'>
            <div className='flex space-x-8'>
              <h3 className='text-white'>⭐ {movie.imdbRating} </h3>
              <h3 className='text-white'>⏳ {movie.Runtime} </h3>
            </div>
            <div>
              <button className='text-white bg-purple-500 transition-colors 
            rounded-md hover:bg-stone-300'
                onClick={() => onDeleteMovie(movie.imdbID)}>✖️</button>
            </div>
          </div>

        </div>
      </li>)}
    </ul >
  )
}
