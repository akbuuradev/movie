import React, {useState, useEffect, useContext} from 'react';
import { useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/api";
import PeopleVideo from "../PeopleVideo";
import {LanguageContext} from "../../context";

const People = () => {
    const [people,setPeople] = useState({})
    const [bio, setBio] = useState(300)
    const {peopleId} = useParams()
    const {language} = useContext(LanguageContext)
    console.log(language)

    const getPeople = (key) => {
        axios(`https://api.themoviedb.org/3/person/${peopleId}?api_key=${key}&language=${language}`)
            .then((res) => {
                console.log(res.data)
                setPeople(res.data)
            })
    }
    const more = (text) => {
        if(bio === 300) {
            setBio(text.length)
        } else {
            setBio(300)
        }
    }
useEffect(() => {
    getPeople(API_KEY)
}, [language])


const {name, profile_path, biography, birthday, place_of_birth, also_known_as} = people
    return (
       <>
           <div id="people">
               <div className="container">
                   <div className="people">
                       <div className="people--card">
                           <div className="people--card__img">
                                   <img width={400} height={500} src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt="img"/>
                           </div>
                           <div className="people--card__name">
                               <h1>{name}</h1>
                               <h3>Дата рождения: {birthday}</h3>
                               <h3>Место рождения: {place_of_birth}</h3>
                               <h3>Также известность как: {also_known_as}</h3>
                               <div>
                                   <h3>Биография</h3>
                                   <p>{biography?.slice(0,bio)}</p>
                                   <h5 onClick={() => {
                                       more(biography)
                                   }
                                   }>{bio === 300 ? "Читать ещё" : "Закрыть"}</h5>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <PeopleVideo peopleId={peopleId}/>
       </>
    );
};

export default People;