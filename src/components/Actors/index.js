import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import logo from "../../img/user.png"
import Slider from "react-slick";
import {Link} from "react-router-dom";

const Actors = ({movieId}) => {
    const [actors,setActors] = useState([])

    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=ru-RU`)
            .then((res) => {
                setActors(res.data.cast)
            })
    }

    useEffect(() => {
        getActors(API_KEY)
    }, [])
    console.log(actors)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplaySpeed: 2000,
        autoplay: true,
        pauseOnHover: true
    };
    console.log(actors)
    return (
        <div id="actors">
            <div className="container">
                <h1>В главных ролях</h1>
                <div className="actors">
                    <Slider {...settings}>
                        {
                            actors.map((el) => {
                                return (
                                    <div className="actors--card">
                                        <Link to={`/movie/movie_people/${el.id}`}>
                                            {el.profile_path ? <img width={150} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`}
                                                                    alt="img"/>
                                                : <img src={logo} width={170} alt="img"/>
                                            }
                                        </Link>
                                        <h4>{el.name}</h4>
                                    </div>
                                )
                            })
                        }
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default Actors;
