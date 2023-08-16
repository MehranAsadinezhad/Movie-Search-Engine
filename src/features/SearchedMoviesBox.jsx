import React, { useState } from 'react'
import MovieBox from '../ui/MovieBox'

export default function SearchedMovieBox({ movies, isLoading, error }) {
    const [selectedId, setSelectedId] = useState("");

    return (
        <MovieBox>
            {isLoading && <p className='text-center mt-20 text-lg
             text-white'>⏳ Loading...</p>}
            {error && <p className='text-center mt-20 text-lg text-white'>
                📌 {error}</p>}
            {!isLoading && !error &&
                <ul className='divide-y divide-stone-600'>
                    {movies.map((movie) => <li key={movie.imdbID}
                        className='flex items-center space-x-6 p-4
                 cursor-pointer hover:bg-lightPurple
                  transition-all duration-200'
                        onClick={() => setSelectedId(movie.imdbID)}>
                        <div>
                            <img src={movie.Poster} alt={movie.Title}
                                className='w-16 h-20'></img>
                        </div>
                        <div>
                            <h1 className='text-white
                     text-lg font-bold mb-3'>{movie.Title}</h1>
                            <h3 className='text-white text-sm'>{movie.Year}</h3>
                        </div>
                    </li>)}
                </ul>}

        </MovieBox>
    )
}
