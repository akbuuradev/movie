import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";



const Home = () => {
    const [search, setSearch] = useState("")

    const nav = useNavigate()
    

    return (
           <div id="home">
               <div className="container">
                   <div className="home">
                       <div className="home--title">
                           <h1>Добро пожаловать.</h1>
                           <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                           <div className="home--title__input">
                               <input type="text" placeholder="Найти фильм,сериал,персону..." onChange={(e) => {setSearch(e.target.value)
                               }} onKeyDown={(e) => {
                                   if (e.key === "Enter") {
                                       nav(`/search/search_movie/${search}`)
                                   }
                               }}/>
                               <button onClick={() => nav(`/search/search_movie/${search}`)}>Search</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
    );
};

export default Home;