import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

export default function Movie({ title, poster_path, overview, vote_average }) {
    return (
        <div>
           <img src={IMAGE_API + poster_path} alt={title} />
        </div>
    )
}
