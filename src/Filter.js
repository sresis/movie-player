import { movieData } from './movieData';
import './App.css';
import React, {useState} from 'react';
import {Card,Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Slider, Input } from '@material-ui/core/';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory
  } from "react-router-dom";



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Filter(props) {
    const [movieNames, setMovieNames] = useState([])
    const titles = []
    // copy of list to store list before sorting
    var movieList = [...movieData]

    // track price range selection. default to showing 1960-2020
    const [range, setRange] = React.useState([1960, 2020]);
    const history = useHistory();

    // sets updated years to filter on based on user input
    const handleYearChange = (evt, newValue) => {
        setRange(newValue);
    }
    const showMovies = (evt) => {
        evt.preventDefault();
        for (const movie of movieList) {
            if (movie.Year >= range[0] && movie.Year <= range[1]) {
                titles.push(

                    <Card style={{ width: '18rem' }} className ="customCard">
                        <Card.Img style={{ width: "75%"}} variant="top" src={movie.Poster}/>
                        <Card.Body >
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                            Year: {movie.Year}
                                <div>
                                    <button onClick={()=>{history.push(`/show-video/${movie.imdbID}`)}}>Show Video</button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                )
            }         
          }
    setMovieNames(titles);
    }

    return (
        <React.Fragment>
            <div id="filter-container">
                <div>Filter by Year</div>
            <Slider
                id="slider"
                value={range}
                onChange={handleYearChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={1960}
                max={2020}
                width="50%"
                        />
            <div>
                <button id="show-but" onClick={showMovies}>Show Movies</button>
            </div>
            <Carousel id="customCaro" responsive={responsive}>
                {movieNames}
            </Carousel>
        </div>
        </React.Fragment>
        
    )

}