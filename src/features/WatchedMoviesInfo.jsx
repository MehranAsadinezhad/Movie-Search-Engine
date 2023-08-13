import React from 'react'

export default function WatchedMoviesInfo() {
    return (
        <div className='flex p-4 flex-col justify-center 
        items-center bg-lightPurple'>
            <h1 className='text-white font-bold text-lg'>MOVIES YOU WATCHED</h1>
            <div className='space-x-5 flex mt-2'>
                <p className='text-white font-semibold text-lg'>🎥 x movies</p>
                <p className='text-white font-semibold text-lg'>⭐ x</p>
                <p className='text-white font-semibold text-lg'>🌟 x</p>
                <p className='text-white font-semibold text-lg'>⏳ x min</p>
            </div>
        </div>
    )
}
