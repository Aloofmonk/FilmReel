import React from 'react'
import MovieList from './MovieList'

const Favorites = ({OnDelete, cont, fav, display}) => {
  return (
    <div className={`container-2 ${cont === 'container-watch-list' && 'container-2-style'}`}>
        <h2>Watch List</h2>
        <div className="row movie">
          <h2 className={display}> There are no movies in Watch List </h2>
          <MovieList title='Favourites' OnDelete={OnDelete} movies={fav}/>
        </div>
    </div>
  )
}

export default Favorites