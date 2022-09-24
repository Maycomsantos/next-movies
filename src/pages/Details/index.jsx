import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Button } from '../styled';
import style from '../style.css';
import { FaStar } from 'react-icons/fa';
import Comments from '../../Components/Comments';
import Youtube from 'react-youtube'


function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [video, setVideos] = useState([])
  const [trailer, setTrailer] = useState(null)



  const [rating, setRating] = useState(null);

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {

    detailsMovie()
    getVideo()
  }, [id])

  const detailsMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=84ca314ae93a39db3f01e0a0206a18fa&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        const {
          title,
          poster_path,
          release_date,
          overview,
          popularity,
          original_language,
          vote_count,
          // video,
          // iso_639_1
        } = data
        const movie = {
          id,
          title,
          image: `${imagePath}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date,
          popularity: popularity,
          original_language: original_language,
          vote_count: vote_count,
          // video: video,
          // iso_639_1: iso_639_1,
        }
        setMovie(movie)
        console.log(movie)
      })
  }

  const getVideo = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=84ca314ae93a39db3f01e0a0206a18fa&language=pt-BR`)
      .then(response => response.json())
      .then(data => {
        const { results } = data
        const videos = results.map((video) => {
          const { id, key, name, site, type, published_at, iso_639_1 } = video
          return {
            id,
            key,
            name,
            site,
            type,
            published_at,
            iso_639_1
          }
        })
        setVideos({ ...video, video })
        console.log(videos)
      })
  }



  return (
    <Container>

      <Link to="/">
        <Button>Voltar</Button>
      </Link>
      <div className="movie">
        <img className="imagedetail" style={style.imagedetail} src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>

        </div>

        {/* Desenvolver parte de visualização dos trailers */}

        {/* <Youtube
          videoId={video.key}
          id={video.id}
          className={"youtube amru"}
          containerClassName={"youtube-container amru"}
          opts={
            {
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }
          }
        /> */}
        {/* <iframe src='https://www.youtube.com/embed/{video.key}'  
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/> */}

        <Comments />

      </div>
    </Container>
  );
}

export default Details;