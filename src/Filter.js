import { movieData } from './movieData';
import './App.css';
import React, {useState} from 'react';
import {Card, } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

export default function Filter() {
    const [movieNames, setMovieNames] = useState([])
    const titles = []
    // copy of list to store list before sorting
    var movieList = [...movieData]

    const showMovies = (evt) => {
        evt.preventDefault();
        for (const movie of movieList) {
            titles.push(

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.Poster}/>
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>
                        Year: {movie.Year}
                        </Card.Text>
                    </Card.Body>
                    </Card>
            )
          }
    console.log(movieList);
    setMovieNames(titles);
    }
    
    return (
        <div>
            <button onClick={showMovies}>xx</button>
            <Carousel responsive={responsive}>
                {movieNames}
            </Carousel>
        </div>
    )

}