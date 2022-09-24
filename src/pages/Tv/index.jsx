import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
    Container,
    Button,
    MovieList,
    Movie
    } from '../styled';

import Header from '../../components/Header';

function TV() {

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    const [tv, setTv] = useState([]);

    useEffect(() => {
        tvs()
    }, [])

    const tvs = async () => {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=84ca314ae93a39db3f01e0a0206a18fa&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => {

                setTv(data.results)
                console.log(data.results)
            })
    }


    return (
        <Container>

            <Header />
            <h2>Mais populares da TV:</h2>

        <MovieList>
        {tv.map(tv => {
                    return (
                        <Movie key={tv.id}>
                            {/* <Link to={`/detailstv/${tv.id}`}> */}
                                <img src={`${imagePath}${tv.poster_path}`} alt={tv.title} />
                            {/* </Link> */}
                            <span>{tv.title}</span>
                        </Movie>
                    )
                })}
        </MovieList>
        </Container>
    )
    
}


export default TV;