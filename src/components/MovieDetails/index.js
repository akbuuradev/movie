import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/api";
import Actors from "../Actors";
import Trailer from "../Trailer";
import {LanguageContext} from "../../context";



const MovieDetails = () => {
    const [details, setDetails] = useState({})
    const {movieId} = useParams()
    const {language} = useContext(LanguageContext)


    const getDetails = (key) => {
    axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
        .then((res) => {
            console.log(res.data)
            setDetails(res.data)
        })
    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [language])
const {poster_path, title, overview, release_date, runtime, vote_average, backdrop_path, genres} = details
    return (
        <>
            <div id="details" style={{background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat center/cover`}}>
                <div className="container">
                    <div className="details">
                        <div className="details--img">
                                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`} alt=""/>
                        </div>
                        <div className="details--info">
                            <h1>{title}</h1>
                            <div className="details--info__genres">
                                {
                                    genres?.map((el) => {
                                        return (
                                            <h4>{el.name}</h4>
                                        )
                                    })
                                }
                            </div>
                            <div className="details--info__title">
                                <h3>Дата выхода: {release_date}</h3>
                                <h3>Длительность: {Math.floor(runtime / 60)}<small>ч</small> {runtime % 60}<small>мин</small></h3>
                            </div>
                            <div className="details--info__top">
                                <div className="details--info__top--vote">
                                    <h2>{Math.floor(vote_average * 10)}<small>%</small></h2>
                                </div>
                                <h4>Рейтинг</h4>
                            </div>
                            <h2>Обзор: {overview}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Actors movieId={movieId}/>
            <Trailer movieId={movieId}/>
        </>
    );
};

export default MovieDetails;