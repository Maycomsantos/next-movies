import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Button } from '../../styled';

function DetailsTv() {
  const { id } = useParams()
  const [tv, setTv] = useState([])

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=84ca314ae93a39db3f01e0a0206a18fa&language=pt-BR&page=1`)
    .then(response => response.json())
    .then(data => {
      const {name, poster_path, release_date, overview} = data
      const tv = {
        id,
        name,
        // original_name,
        image: `${imagePath}${poster_path}`,
        sinopse: overview,
        releaseDate: release_date
      }
      setTv(tv)
      console.log(tv)
    })
  }, [id])

  return (
    <Container>
      <div className="tv">
      <img className="imagedetail" src={tv.image} alt={tv.sinopse} />
      <div className="details">
        <h1>{tv.name}</h1>
        <span>Sinopse: {tv.sinopse}</span>
        <span>Sinopse: {tv.sinopse}</span>
        <span className='release-date'>Release date: {tv.releaseDate}</span>
        <Link to="/tv">
          <Button>Go Back</Button>
        </Link>
      </div>
    </div>
    </Container>
  );
}

export default DetailsTv;