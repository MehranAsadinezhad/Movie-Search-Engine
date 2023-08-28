
export default function SearchedMovieBox({ movies, isLoading, error
    , onHandleSelectedMovie }) {


    return (
        <div className='bg-midPurple w-[265px] h-96 sm:w-[390px]
        lg:w-[410px] lg:h-[500px] lg:my-8 rounded-lg overflow-y-scroll my-3 
        md:w-[500px] md:h-[500px] md:my-8'>

            {isLoading && <p className='text-white text-center
                font-semibold text-2xl mt-24 tracking-wider'>⏳ Loading...</p>}
            {error && <p className='text-white text-center
                font-semibold text-2xl mt-24 tracking-wider'>
                📌 {error}</p>}
            {!isLoading && !error &&
                <ul className='divide-y divide-stone-600'>
                    {movies.map((movie) => <li key={movie.imdbID}
                        className='flex items-center p-3 space-x-6 md:p-4
                  cursor-pointer hover:bg-lightPurple
                  transition-all duration-200'
                        onClick={() => onHandleSelectedMovie(movie.imdbID, movie.Title)}>
                        <div>
                            <img src={movie.Poster} alt={movie.Title}
                                className='w-14 h-20 md:w-16 md:h-22'></img>
                        </div>
                        <div>
                            <h1 className='text-white md:text-xl
                            font-bold mb-3'>{movie.Title}</h1>
                            <h3 className='text-white text-sm'>📅 {movie.Year}</h3>
                        </div>
                    </li>)}
                </ul>}
                
        </div>
    )
}
