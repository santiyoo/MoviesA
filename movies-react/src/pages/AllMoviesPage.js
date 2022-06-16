import React from 'react';
import Header from '../components/Header';
import { popular, nowPlayingSeries, topRated, topRatedSerie } from "../Fetch";
import { useState, useEffect } from "react";
import Pelicula from '../components/Pelicula';

const AllMovies = () => {
    const [filtro, setFiltro] = useState("");

    const [peliculas, setPeliculas] = useState([])
    const [peliculasfilter, setPeliculasFilter] = useState([])

    const [peliculastp, setPeliculastp] = useState([])
    const [peliculastpfilter, setPeliculastpFilter] = useState([])

    const [populars, setPopulars] = useState([])
    const [popularsfilter, setPopularsFilter] = useState([])

    const [topRateds, setTopRateds] = useState([])
    const [topRatedsfilter, setTopRatedsFilter] = useState([])

    const [nowPlayingS, setNowPlayingSeries] = useState([])
    const [nowPlayingSeriesfilter, setNowPlayingSeriesFilter] = useState([])

    useEffect(() => {
        popular().then((data) => {
            setPeliculas(data.results);
            setPeliculasFilter(data.results);
        })

        topRated().then((data) => {
            setPeliculastp(data.results);
            setPeliculastpFilter(data.results)
        })

        topRatedSerie().then((data) => {
            setTopRateds(data.results);
            setTopRatedsFilter(data.results)
        })

        nowPlayingSeries().then((data) => {
            setNowPlayingSeries(data.results);
            setNowPlayingSeriesFilter(data.results)
        })
    },[])

    useEffect(()=>{
        setPeliculasFilter(peliculas.filter(x=>x.title.includes(filtro)))
        setPeliculastpFilter(peliculastp.filter(x=>x.title.includes(filtro)))
        setPopularsFilter(populars.filter(x=>x.name.includes(filtro)))
        setTopRatedsFilter(topRateds.filter(x=>x.name.includes(filtro)))
        setNowPlayingSeriesFilter(nowPlayingS.filter(x=>x.name.includes(filtro)))
    },[filtro])

    const myStyle={
        borderRadius: "10px",
    };

    return (  
        <>
            <Header setFiltro={setFiltro}/>
            <div className="container">
                <div className='row'>
                    {peliculasfilter.map((pelicula, index) => {
                        return (
                            <div className="col-md-2"> 
                                <Pelicula key={index} pelicula={pelicula}/>
                            </div>  
                        )
                    })}
                    {peliculastpfilter.map((pelicula, index)=>{
                        if (pelicula.poster_path != null) {
                            return(
                            <div className="col-md-2"> 
                                    <Pelicula key={index} pelicula={pelicula}/>
                                </div>             
                            )
                        }
                    })}
                    {popularsfilter.map((pelicula, index)=>{
                        if (pelicula.poster_path != null) {
                            return(
                                <div className="col-md-2"> 
                                    <Pelicula key={index} pelicula={pelicula}/>
                                </div>            
                            )
                        }
                    })}
                    {topRatedsfilter.map((pelicula, index)=>{
                        if (pelicula.poster_path != null) {
                            return(
                               <div className="col-md-2"> 
                                    <Pelicula key={index} pelicula={pelicula}/>
                                </div>              
                            )
                        }
                    })}
                    {nowPlayingSeriesfilter.map((pelicula, index)=>{
                        if (pelicula.poster_path != null) {
                            return(
                                <div className="col-md-2"> 
                                    <Pelicula key={index} pelicula={pelicula}/>
                                </div>            
                            )
                        }
                    })}
                </div>
            </div>
        </>
    );
}

export default AllMovies;