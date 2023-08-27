import React from 'react'
import MovieBox from '../ui/MovieBox'
import WatchedMoviesInfo from './WatchedMoviesInfo'
import SelectedMovie from './SelectedMovie'
import SelectedMovies from './SelectedMovies'

export default function WatchedMovieBox({ selectedId,
  onAddMovie, add,setAdd, selectedMovies, onDeleteMovie,setSelectedMovie}) {
  return (
    <MovieBox>

      {selectedId ? <SelectedMovie add={add} onAddMovie={onAddMovie}
        selectedId={selectedId} setAdd={setAdd} 
        selectedMovies={selectedMovies} setSelectedMovie={setSelectedMovie} />
        : <>
          <WatchedMoviesInfo selectedMovies={selectedMovies} />
          <SelectedMovies selectedMovies={selectedMovies} 
          onDeleteMovie={onDeleteMovie}/></>}
      {add === true && <>
        <WatchedMoviesInfo selectedMovies={selectedMovies} />
        <SelectedMovies selectedMovies={selectedMovies} 
        onDeleteMovie={onDeleteMovie}/></>}

    </MovieBox>
  )
}
