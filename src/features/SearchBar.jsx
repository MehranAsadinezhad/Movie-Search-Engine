
export default function SearchBar({ query, setQuery, movies }) {

    return (
        <div className='flex flex-col items-center space-y-2
        sm:flex sm:flex-row sm:items-center sm:justify-around
        bg-gradient-to-r from-purple-600 to-purple-800 py-3'>
            <h1 className='text-white text-lg font-semibold 
            tracking-widest md:text-2xl md:font-bold font-mono'>
                🍿 movieSearchEngine</h1>
            <input type='search' placeholder='Search movie ...'
                value={query} onChange={(e) => setQuery(e.target.value)}
                className='bg-purple-500 outline-none rounded-md px-2 py-1 
                md:rounded-lg md:w-96 md:h-12 
                md:p-3 placeholder:text-stone-300
            focus:outline-none focus:shadow-xl focus:-translate-y-0.5
            transition-all duration-300 text-white'></input>
            <h3 className='text-stone-200 text-xl hidden lg:block'>Found {movies.length} results</h3>
        </div>
    )
}
