import React from 'react';
import './movie.css';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, overview, vote_average }) {
    const setVoteClass = (vote) => {
        if (vote >= 8) {
          return "green";
        } else if (vote >= 6) {
          return "orange";
        } else {
          return "red";
        }
    };
    
    return (
        <div className="movie">
          {poster_path ? (
            <img src={IMAGE_API + poster_path} alt={title} />
           ) : (
            <img src="https://i.ibb.co/RjBLWxB/grey-brim.png" alt={title} />
           )}
            <div className="movie_info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie_overview">
                <h2>Overview:</h2>   
                <p>{overview}</p>
            </div>
        </div>
    )
}
