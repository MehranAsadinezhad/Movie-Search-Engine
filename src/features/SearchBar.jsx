import React from 'react'

export default function SearchBar() {
    return (
        <div className='flex items-center justify-between 
        bg-gradient-to-r from-purple-600 to-purple-800 p-3
        rounded-lg m-6'>
            <h1 className='text-white text-2xl font-semibold'>🍿 movieSearchEngine</h1>
            <input type='search' placeholder='Search movie ...'
            className='bg-purple-500 outline-none rounded-lg w-96 h-12 p-3
            placeholder:text-stone-200
            focus:outline-none focus:shadow-xl focus:-translate-y-0.5
            transition-all duration-300'></input>
            <h3 className='text-stone-400 text-xl'>Found x results</h3>
        </div>
    )
}
