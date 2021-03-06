import React, { useEffect, useState } from 'react';
import Movie from './Movie';


const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=";


function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = API => {
    fetch(API)
    .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })
  }

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

   const handleOnSubmit = (event) => {
    event.preventDefault();
    
     if (searchTerm) {
       getMovies(SEARCH_API + searchTerm)
       
       setSearchTerm('');
     }
  }
  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  }


  return (
  <>
  <header>
    <form onSubmit={handleOnSubmit}>
      <input
        type="search"
        className="search"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={handleOnChange}
      />
       <input title="Search" value="" type="submit" class="button" onChange={handleOnChange}/>
    </form>
    </header>
    <div className="movie_container">
      {movies.length > 0 && movies.slice(0, 8).map((movies) => 
        <Movie key={movies.id} {...movies} />
      )}
    </div>
   </>
  )
}

export default MovieApp;
