import React from 'react'
import MovieCard from '../MovieCard'
import { useState } from 'react'

function Home() {

  const [searchQuery,SetSearchQuery] = useState("");

    const movies=[
        {id: 1,title:"Jons" ,release_date:"2026"},
        {id: 2,title:"Kate" ,release_date:"2025"},
        {id: 3,title:"Binas" ,release_date:"2024"},
       
    ]

    const handleSearch =(e) =>{
      e.preventDefault();//prvent referching and the type things stay same
      alert(searchQuery);
      SetSearchQuery("------");
    }

  return <div className="home">
    <form onSubmit={handleSearch} className="search-form">
        <input type="text" 
        placeholder="Search for movies..." 
        className="search-input"
        value={searchQuery} // update the state from a input element
        onChange={ (e) => SetSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
    </form>

    <div className="movies-grid">
        {movies.map( 
          (movie) => (
           //movie.title.toLowerCase().startsWith(searchQuery) && 
          <MovieCard movie={movie} key={movie.id}/>
         ))}
    </div>
  </div>
  
}

export default Home
