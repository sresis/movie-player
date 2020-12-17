import { movieData } from './movieData';
import './App.css';
import React, {useState} from 'react';

export default function Filter() {
    const [movieNames, setMovieNames] = useState([])
    const titles = []
    // copy of list to store list before sorting
    var movieList = [...movieData]

    const showMovies = (evt) => {
        evt.preventDefault();
        for (const movie of movieList) {
            titles.push(
              <div>{movie.Title}</div>
            )
          }
    console.log(movieList);
    setMovieNames(titles);
    }
    
    return (
        <div>
            <button onClick={showMovies}>xx</button>
            {movieNames}
        </div>
    )

}