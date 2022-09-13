import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Container,
    Movie,
    MovieList
} from '../styled'

function Home() {

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    const [movies, setMovies] = useState([]);
    // const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        filmes()
    }, [])

    const filmes = async (searchKey) => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=84ca314ae93a39db3f01e0a0206a18fa&language=en-US')
            .then(response => response.json())
            .then(data => {

                setMovies(data.results)
                console.log(data.results)
            })
    }
    
    return (

        <Container>
            <h2>Filmes Populares:</h2>
            {/* <form onSubmit={searchMovies}>
                <input type="text" onChange={(e) => setSearchKey(e.target.value)}></input>
                <button type="submit">Procurar</button>
            </form> */}
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>

    )
}

export default Home;