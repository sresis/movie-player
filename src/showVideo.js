import Filter from './Filter';
import { movieData } from './movieData';
import React, {useState} from 'react';
import ReactPlayer from 'react-player'
import { Slider, Direction, PlayerIcon } from 'react-player-controls'


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
    // get movie ID. this will be used for dynamic videos in future
    const {id} = useParams();
    const temp = []
    // search for movie's details
    var allMovies = movieData;
    for (var i = 0; i < allMovies.length; i++) {
        if (allMovies[i].imdbID === id) {
            temp.push(allMovies[i].URL);
        }
    
    
    }
    
    return (
        <div id="player">
 
            <ReactPlayer 
                playing={true} 
                light={true}
                controls={true}
                url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                
                
            </ReactPlayer>
            <button onClick={()=>{history.push(`/`)}}>Return</button>

            


        </div>
        
    )
  }