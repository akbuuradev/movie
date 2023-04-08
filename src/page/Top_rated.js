import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import MovieCard from "../components/MovieCard";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi"
import {LanguageContext} from "../context";


const TopRated = () => {
    const array = [1,2,3,4,5,6,7,8,9,10]
    const [rated, setRated] = useState([])
    const [active, setActive] = useState(1)
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    console.log(language)

    const getRated = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setRated(res.data.results)
            })
    }
    useEffect(() => {
   getRated(API_KEY)
    }, [active, language])
    return (
        <div id="rated" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <h1>Top_Rated</h1>
                <div className="popular">
                        {
                            rated.map((el) => {
                                return (
                                    <MovieCard el={el} key={el.id}/>
                                )
                            })
                        }
                </div>
                <div className="popular--pages">
                    {

                            <div className="popular--pages__btn">
                                <button onClick={() => setActive(active - 1)} style={{
                                    background: dark === true ? "white" : "black",
                                    color: dark === true ? "black" : "white"
                                }}><HiChevronLeft/></button>
                                <button style={{
                                    textAlign: "center",
                                    color: "black"
                                }} style={{
                                    background: dark === true ? "white" : "black",
                                    color: dark === true ? "black" : "white"
                                }}>{active}{active ? active === -0 : setActive(1)}</button>
                                <button onClick={() => setActive(active + 1)} style={{
                                    background: dark === true ? "white" : "black",
                                    color: dark === true ? "black" : "white"
                                }}><HiChevronRight/></button>
                            </div>

                    }
                </div>
            </div>
        </div>
    )
};

export default TopRated;


//<button onClick={() => setActive(btn)}>{btn}</button>