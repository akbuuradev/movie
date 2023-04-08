import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import Slaider from "react-slick"
import Video from "../../img/video1.png"
import {Link} from "react-router-dom";

const PeopleVideo = ({peopleId}) => {
    const [videos, setVideos] = useState([])

    const getVideos = (key) => {
        axios(`https://api.themoviedb.org/3/person/${peopleId}/movie_credits?api_key=${key}&language=ru-RU`)
            .then((res) => {
                console.log(res.data.cast)
                setVideos(res.data.cast)
            })
    }

    useEffect(() => {
        getVideos(API_KEY)
    }, [])
    console.log(videos)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplaySpeed: 2000,
        autoplay: true,
        pauseOnHover: true
    };


    return (
        <div id="peopleVideo">
            <div className="container">
                <h1>Известность за</h1>
                <div className="peopleVideo">
                   <Slaider {...settings}>
                       {
                           videos.map((el) => (
                               <div className="peopleVideo--card">
                                       <Link to={`/movie/movie_details/${peopleId}`}>
                                           {el.poster_path ? <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`}
                                                                  alt="img"/>
                                               : <img src={Video} alt="img"/>}
                                       </Link>
                                   <h2>{el.title}</h2>
                               </div>
                           ))
                       }
                   </Slaider>
                </div>
            </div>
        </div>
    );
};

export default PeopleVideo;