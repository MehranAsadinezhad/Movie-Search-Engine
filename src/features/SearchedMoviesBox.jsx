
import MovieBox from '../ui/MovieBox'

export default function SearchedMovieBox({ movies, isLoading, error
    , onHandleSelectedMovie }) {


    return (
        <MovieBox>
            {isLoading && <p className='text-white text-center
                font-semibold text-2xl mt-24 tracking-wider'>⏳ Loading...</p>}
            {error && <p className='text-white text-center
                font-semibold text-2xl mt-24 tracking-wider'>
                📌 {error}</p>}
            {!isLoading && !error &&
                <ul className='divide-y divide-stone-600'>
                    {movies.map((movie) => <li key={movie.imdbID}
                        className='flex items-center space-x-6 p-4
                 cursor-pointer hover:bg-lightPurple
                  transition-all duration-200'
                        onClick={() => onHandleSelectedMovie(movie.imdbID, movie.Title)}>
                        <div>
                            <img src={movie.Poster} alt={movie.Title}
                                className='w-16 h-22'></img>
                        </div>
                        <div>
                            <h1 className='text-white
                    text-lg font-bold mb-3'>{movie.Title}</h1>
                            <h3 className='text-white text-sm'>📅 {movie.Year}</h3>
                        </div>
                    </li>)}
                </ul>}
        </MovieBox>
    )
}
