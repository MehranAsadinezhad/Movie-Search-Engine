import React from 'react'

export default function WatchedMoviesInfo({ selectedMovies }) {
    const numMovies = selectedMovies.length;
    const avgRating = selectedMovies.reduce((acc, movie) =>
        acc + Math.round(Number(movie.imdbRating) / numMovies), 0)
    const avgRuntime = selectedMovies.reduce((acc, movie) =>
        acc + Number(movie.Runtime.split(" ").at(0)), 0)
    return (
        <div className='flex p-4 flex-col justify-center 
        items-center bg-lightPurple rounded-lg shadow-lg'>
            <h1 className='text-white font-bold text-lg'>📁 MOVIES TO WATCH</h1>
            <div className='space-x-5 flex mt-2'>
                <p className='text-white font-semibold text-lg'>🎥 {numMovies} movies</p>
                <p className='text-white font-semibold text-lg'>⭐ {avgRating}</p>
                <p className='text-white font-semibold text-lg'>⏳ {avgRuntime} min</p>
            </div>
        </div>
    )
}
