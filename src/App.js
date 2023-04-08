import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Popular from "./page/Popular";
import Top_rated from "./page/Top_rated";
import MovieDetails from "./components/MovieDetails";
import MovieCard from "./components/MovieCard";
import People from "./components/People";
import Search from "./page/Search";




function App() {
  return (
    <div id="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/popular"} element={<Popular/>}/>
            <Route path={"/top_rated"} element={<Top_rated/>}/>
            <Route path={"/movie/movie_details/:movieId"} element={<MovieDetails/>}/>
            <Route path={"/movie_card"} element={<MovieCard/>}/>
            <Route path={"/movie/movie_people/:peopleId"} element={<People/>}/>
            <Route path={"/search/search_movie/:movieName"} element={<Search/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
