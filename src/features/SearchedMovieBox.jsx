import React from 'react'
import MovieBox from '../ui/MovieBox'

export default function SearchedMovieBox({ movies }) {
    return (
        <MovieBox>
            <ul className='divide-y divide-stone-600'>
                {movies.map((movie) => <li key={movie.imdbID}
                    className='flex items-center space-x-6 p-4
                     cursor-pointer hover:bg-lightPurple
                      transition-all duration-200'>
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
            </ul>
        </MovieBox>
    )
}
