import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating';

export default function SelectedMovie({ selectedMovies }) {
  const [rating, setRating] = useState(0) // Initial value

  return (
    <>
      <div className='flex bg-lightPurple space-x-4 items-center'>
        <div>
          <img src={selectedMovies.Poster} alt={selectedMovies.imdbID}
            className='w-36 h-48'></img>
        </div>
        <div className='space-y-4 flex flex-col justify-between'>
          <h1 className='text-white 
            font-bold text-lg'>{selectedMovies.Title}</h1>
          <h3 className='text-stone-300'>{selectedMovies.Year}
            - {selectedMovies.runtime} min</h3>
          <h3 className='text-stone-300'>{selectedMovies.Genre}</h3>
          <h3 className='text-stone-300'>⭐{selectedMovies.imdbRating} IMDB rating</h3>
        </div>
      </div>
      <div className='wrap flex flex-col justify-center 
      items-center bg-lightPurple rounded-lg m-7 p-3 space-y-4'>
        <div className='flex items-center space-x-3'>
          <Rating style={{ maxWidth: 250 }}
            items={9} value={rating} onChange={setRating} />
            <h1 className='text-orange-400 font-semibold text-lg'>{rating}</h1>
        </div>
        <button className='bg-gradient-to-r from-purple-600 to-purple-800 p-3
        rounded-full w-full text-white font-semibold
        hover:bg-gradient-to-r hover:from-purple-800
        hover:to-purple-900 transition-colors duration-500'>+ Add to list</button>
      </div>
      <div className='space-y-3 m-7 text-stone-300 font-semibold'>
        <h3 className='italic'>x</h3>
        <h3>Starring x</h3>
        <h3>Directed by x</h3>
      </div>
    </>
  )
}
