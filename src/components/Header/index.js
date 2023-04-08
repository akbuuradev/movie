import React, {useContext, useState} from 'react';
import logo from '../../img/logo2.svg'
import {Link, NavLink} from "react-router-dom";
import {LanguageContext} from "../../context";
import {BsBrightnessHigh, BsMoonStarsFill} from "react-icons/bs"
const Header = () => {
    const {setLanguage} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)

    return (
        <div id="header" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="header">
                    <Link to={"/"}>
                        <img src={logo} alt="img"/>
                    </Link>
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Popular</NavLink>
                        <NavLink to={"/top_rated"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Top_rated</NavLink>
                    </div>
                    <div className="header--btn">
                        <button>Sing in</button>
                    </div>
                    <select onChange={(e) => setLanguage(e.target.value)} style={{
                        background: dark === true ? "white" : "black",
                        color: dark === true ? "black" : "white"
                    }}>
                        <option value="ru-RU">Русский</option>
                        <option value="en-US">English</option>
                        <option value="fr-GR">France</option>
                    </select>
                    <div className="header--dark">
                        <button onClick={() => setDark(false)}><BsBrightnessHigh/></button>
                       <button onClick={() => setDark(true)}><BsMoonStarsFill/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;