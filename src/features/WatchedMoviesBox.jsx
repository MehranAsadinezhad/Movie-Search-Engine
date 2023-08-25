import React from 'react'
import MovieBox from '../ui/MovieBox'
import WatchedMoviesInfo from './WatchedMoviesInfo'
import SelectedMovie from './SelectedMovie'
import SelectedMovies from './SelectedMovies'

export default function WatchedMovieBox({ selectedId,
  onAddMovie, add,setAdd, selectedMovies}) {
  return (
    <MovieBox>

      {selectedId ? <SelectedMovie add={add} onAddMovie={onAddMovie}
        selectedId={selectedId} setAdd={setAdd} selectedMovies={selectedMovies} />
        : <>
          <WatchedMoviesInfo selectedMovies={selectedMovies} />
          <SelectedMovies selectedMovies={selectedMovies} /></>}
      {add === true && <>
        <WatchedMoviesInfo selectedMovies={selectedMovies} />
        <SelectedMovies selectedMovies={selectedMovies} /></>}

    </MovieBox>
  )
}
