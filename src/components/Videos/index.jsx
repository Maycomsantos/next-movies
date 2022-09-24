import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Videos() {
    const { id } = useParams()
    const [video, setVideo] = useState([])

    useEffect(() => {
    
        getVideos()
      }, [id])

      const getVideos = () => {
         fetch('https://api.themoviedb.org/3/movie/760741/videos?api_key=84ca314ae93a39db3f01e0a0206a18fa&language=pt-BR')
         .then(response => response.json())
         .then(data => {
           const {
                id,
                key,
                name
           } = data

           const video = {
             id,
             name: name,
             key: key
           }
           setVideo(video)
           console.log(video)
         })
       }

       {video.key}
}

export default Videos;