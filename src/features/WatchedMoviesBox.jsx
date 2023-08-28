import React from 'react'
import WatchedMoviesInfo from './WatchedMoviesInfo'
import SelectedMovie from './SelectedMovie'
import SelectedMovies from './SelectedMovies'

export default function WatchedMovieBox({ selectedId,
  onAddMovie, add, setAdd, selectedMovies, onDeleteMovie, setSelectedMovie }) {
  return (
    <div className='bg-midPurple w-[265px] h-96 sm:w-[390px]
    lg:w-[410px] lg:h-[500px] rounded-lg overflow-y-scroll mb-3
    md:w-[500px] md:h-[500px] md:my-8'>

      {selectedId ? <SelectedMovie add={add} onAddMovie={onAddMovie}
        selectedId={selectedId} setAdd={setAdd}
        selectedMovies={selectedMovies} setSelectedMovie={setSelectedMovie} />
        : <>
          <WatchedMoviesInfo selectedMovies={selectedMovies} />
          <SelectedMovies selectedMovies={selectedMovies}
            onDeleteMovie={onDeleteMovie} /></>}
      {add === true && <>
        <WatchedMoviesInfo selectedMovies={selectedMovies} />
        <SelectedMovies selectedMovies={selectedMovies}
          onDeleteMovie={onDeleteMovie} /></>}

    </div>
  )
}
