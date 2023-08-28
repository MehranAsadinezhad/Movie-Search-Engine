import React from 'react'

export default function WatchedMoviesInfo({ selectedMovies }) {
    const numMovies = selectedMovies.length;
    const avgRating = selectedMovies.reduce((acc, movie) =>
        acc + Number(movie.imdbRating) / numMovies, 0)
    const avgRuntime = selectedMovies.reduce((acc, movie) =>
        acc + Number(movie.Runtime.split(" ").at(0)), 0)
    return (
        <div className='flex p-2 md:p-4 flex-col justify-center 
        items-center bg-lightPurple rounded-t-lg w-full shadow-lg'>
            <h1 className='text-white font-semibold md:font-bold text-lg'>📁 MOVIES TO WATCH</h1>
            <div className='items-center justify-center md:space-x-5 space-x-3 flex mt-2'>
                <p className='text-white font-semibold md:text-lg'>🎥 {numMovies} movies</p>
                <p className='text-white font-semibold md:text-lg'>⭐ {avgRating.toFixed(2)}</p>
                <p className='text-white font-semibold md:text-lg'>⏳ {avgRuntime} min</p>
            </div>
        </div>
    )
}
