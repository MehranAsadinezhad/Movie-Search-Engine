import React from 'react'
import MovieBox from '../ui/MovieBox'
import WatchedMoviesInfo from './WatchedMoviesInfo'
import SelectedMovie from './SelectedMovie'

export default function WatchedMovieBox({watchedMovies}) {
  return (
    <MovieBox>
        <WatchedMoviesInfo/>
        <SelectedMovie selectedMovies={watchedMovies}/>
    </MovieBox>
  )
}
