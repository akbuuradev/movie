import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import {Link} from "react-router-dom";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi"
import {LanguageContext} from "../context";


const Popular = (key) => {
    const array = [1,2,3,4,5,6,7,8,9,10]
    const [popular, setPopular] = useState([])
    const [active, setActive] = useState(1)
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const getPopular = () => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${language}&page=${active}`)
            .then((res) => {
                    console.log(res.data.results)
                    setPopular(res.data.results)
                }
            )
    }
    useEffect( () => {
      getPopular(API_KEY)
    }, [active, language])

    return (
        <>
            <div id="popular" style={{
                background: dark === true ? "black" : "white"
            }}>
                <div className="container">
                    <h1>Popular</h1>
                    <div className="popular">
                        <div className="popular--title">
                            {
                                popular.map((el) => {
                                    return (
                                        <div id={el.id} className="popular--title__card" style={{
                                            border: dark === true ? "4px solid white" : "4px solid black"
                                        }}>
                                            <Link to={`/movie/movie_details/${el.id}`}>
                                                <img
                                                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`}
                                                    alt=""/>
                                            </Link>
                                            <h3 style={{
                                                color: dark === true ? "white" : "black"
                                            }}>{el.title}</h3>
                                        </div>
                                    )
                                })
                            }
                                </div>
                                <div className="popular--pages" >
                                <button onClick={() => setActive(active - 1)} style={{
                                    background: dark === true ? "white" : "black",
                                    color: dark === true ? "black" : "white"
                                }}><HiChevronLeft/></button>
                                <button style={{
                                textAlign: "center",
                                color: "black",
                            }} style={{
                                    background: dark === true ? "white" : "black",
                                    color: dark === true ? "black" : "white"
                                }}>{active}{active ? active === -0 : setActive(1)}</button>
                                <button onClick={() => setActive(active + 1)} style={{
                                    background: dark === true ? "white" : "black",
                                    color: dark === true ? "black" : "white"
                                }}><HiChevronRight/></button>
                                </div>
                        </div>
                    </div>
                </div>
        </>

    );
};

export default Popular;