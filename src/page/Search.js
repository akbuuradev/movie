import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import {useParams} from "react-router-dom";
import {LanguageContext} from "../context";

const Search = () => {
    const [searchDetails, setSearchDetails] = useState([])
    const {movieName} = useParams()
    const {dark} = useContext(LanguageContext)

    const getSearch = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => {
                console.log(res.data.results)
                setSearchDetails(res.data.results)
            })
    }

    useEffect(()=> {
        getSearch(API_KEY)
    },[searchDetails])

    console.log(searchDetails)


    return (
        <div id="search" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="search">
                    {
                        searchDetails.map((el) => {
                            return (
                                <div className="search--card"  style={{
                                    border: dark === true ? "2px solid white" : "4px solid black"
                                }}>
                                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img"/>
                                        <h3 style={{
                                            color: dark === true ? "white" : "black"
                                        }}>{el.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;