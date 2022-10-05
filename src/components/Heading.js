import React from 'react'
import Search from './Search'
import {FaSearch} from 'react-icons/fa'
import {TbMovie} from 'react-icons/tb'
import {FaEye} from 'react-icons/fa'


const Heading = ({title, searchMovie, setSearchMovie, OnSearch, OnWatch, nam, cont}) => {
  return (
    <div className='heading'>
      
        <h1 className='fixed'>{title}<TbMovie className={'movie-icon'}/></h1>
        <div className="icons">
          <Search nam={nam} searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
          <div className="sub-icons">
            <FaSearch onClick={() => OnSearch(nam)} className={`search-icon ${nam === 'input' && 'search-icon-style'}`}/>
            <FaEye onClick={() => OnWatch(cont)} className={`watch-icon ${cont === 'container-watch-list' && 'watch-icon-style'}`}/>
      
          </div>
        </div>
        
    </div>
  )
}

export default Heading