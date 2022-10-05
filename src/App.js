import React, { useState, useEffect } from 'react';
import  './App.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import Favorites from './components/Favorites';

function App() {

  // UseState for handling in-state changes
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')
  const [fav, setFav] = useState([])
  const [nam, setNam] = useState('inputv')
  const [cont, setCont] = useState('container')
  const [display, setDisplay] = useState('')

  // Handling API calls with async & await for proper running of the application // also using logic involving the searchMovie useState directly in the API url as the key value
  const getMovieRequest = async (searchMovie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchMovie ? searchMovie: 'spiderman'}&api_key=ed595105f1b1444717319771a70f98bf`
    // Awaiting the fetched url 
    const response = await fetch(url)
    // Awaiting the fetched response.json
    const responseJson = await response.json()
    // Creating a conditional logic for Setting the useState setMovies to the responseJson
    if(responseJson.results){
      setMovies(responseJson.results)
    }

  }
  
  // const fetchFavRequest = async () => {
  //   const url = 'http://localhost:5000/fav'
  //   const response = await fetch(url)
  //   const responseJson = await response.json()

  //   return responseJson
  // }

  // useEffect(() =>{
  //   const getFavRequest = async () => {
  //     const favFromServer = await fetchFavRequest()
  //     setFav(favFromServer)
  //   }
  //   getFavRequest()
  // }, [])
  // Calling the getMovieRequest async function within a useEffect function so as to execute it on page load & also setting searchMovie to change the result in real time
  useEffect(() => {
    getMovieRequest(searchMovie)
    
  }, [searchMovie])

  // Function to add movie to fav list
  const OnTap = (movie) => {

    const newFav = [ ...fav,  movie]
    setFav(newFav)
    
    fav.filter((f) => f.id === movie.id && setFav([...fav]) & alert(`${movie.title} is already in Favourites`))
    fav.length > -1 && setDisplay('empty-message')
  }
  // Delete movie from fav list
  const OnDelete = (movie) => { 
    const newFav = Array.from(fav).filter((f) => f.id !== movie.id && f)
    setFav(newFav)
    fav.length < 2 && setDisplay('empty-message-display')
  }


  const OnSearch = (nam) => {
    setNam('input')
    nam === 'input' && setNam('inputv')
  }

  const OnWatch = (cont) => {
    setCont('container-watch-list')
    cont === 'container-watch-list' && setCont('container')
  }
  
  return (

    <div className="container-fluid filmreel">

      <div className="heading"><Heading cont={cont} OnWatch={OnWatch} nam={nam} OnSearch={OnSearch} searchMovie={searchMovie} setSearchMovie={setSearchMovie} title={<span>Film<span className='span-red'>Reel</span></span>}/></div>

      <div className={cont}>
        <h2 className='movie-h2'>Movies</h2>
        <div className="row movie">
          <MovieList title='Movies' OnTap={OnTap} movies={movies}/>
        </div>
      </div>
       
      <Favorites display={display} OnDelete={OnDelete} cont={cont} fav={fav}/>

    </div>
  );

}

export default App