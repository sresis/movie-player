import Filter from './Filter';
import { movieData } from './movieData';
import React, {useState} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useParams,
    useLocation
  } from "react-router-dom";


export default function ShowVideo(props) {
    const history = useHistory();
    // get movie ID
    const {id} = useParams();
    const [link, setLink] = useState();
    const temp = []
    // search for movie's details

    var allMovies = movieData;
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].imdbID === id) {
            temp.push(allMovies[i].URL);
            console.log(temp);
        }
        

    
    
    
    }
    
    return (
        <div>
            <iframe width="420" height="315" title="movie" src={temp}>
            </iframe>
            <div>
            <button onClick={()=>{history.push(`/`)}}>Return</button>

            </div>
            


        </div>
        
    )
  }