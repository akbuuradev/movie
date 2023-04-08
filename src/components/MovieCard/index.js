import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";

const MovieCard = ({el, id}) => {
    const {dark} = useContext(LanguageContext)
    return (
        <div id={el.id} className="popular--card" style={{
            border: dark === true ? "2px solid white" : " 4px solid black"
        }}>
            <Link to={`/movie/movie_details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
            </Link>
            <h3 style={{
                color: dark === true ? "white" : "black"
            }}>{el.title}</h3>
        </div>
    );
};

export default MovieCard;