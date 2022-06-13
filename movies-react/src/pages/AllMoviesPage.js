import React from 'react';
import Header from '../components/Header';
import { popular, popularSerie, nowPlayingSeries, topRated, topRatedSerie } from "../Fetch";
import { useState, useEffect } from "react";

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

        popularSerie().then((data) => {
            setPopulars(data.results);
            setPopularsFilter(data.results)
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
        // setPopularsFilter(populars.filter(x=>x.title.includes(filtro)))
        // setTopRatedsFilter(topRateds.filter(x=>x.title.includes(filtro)))
        // setNowPlayingSeriesFilter(nowPlayingS.filter(x=>x.name.includes(filtro)))
    },[filtro])

    const myStyle={
        borderRadius: "10px",
        height: "50%",
    };

    return (  
        <>
            <Header setFiltro={setFiltro}/>
            <div className="container" style={myStyle}>
                <div className='row mb-3'>
                    {peliculasfilter.map((x)=>{
                        if (x.poster_path != null){
                            return(
                                <div className="col-md-2">
                                    <div class="ml-3">
                                        <img src={`https://image.tmdb.org/t/p/w200/${x.poster_path}`} style={myStyle}/>
                                        <h6>{ x.title }</h6>
                                    </div>
                                </div>              
                            )
                        }
                    })}
                    {peliculastpfilter.map((x)=>{
                        if (x.poster_path != null) {
                            return(
                                <div className="col-md-2">
                                    <div class="ml-3">
                                        <img src={`https://image.tmdb.org/t/p/w200/${x.poster_path}`} style={myStyle}/>
                                        <h6>{ x.title }</h6>
                                    </div>
                                </div>              
                            )
                        }
                    })}
                    {/* {popularsfilter.map((x)=>{
                        if (x.poster_path != null) {
                            return(
                                <div className="col-md-2">
                                    <div class="ml-3">
                                        <img src={`https://image.tmdb.org/t/p/w200/${x.poster_path}`} style={myStyle}/>
                                        <h6>{ x.name }</h6>
                                    </div>
                                </div>              
                            )
                        }
                    })}
                    {topRatedsfilter.map((x)=>{
                        if (x.poster_path != null) {
                            return(
                                <div className="col-md-2">
                                    <div class="ml-3">
                                        <img src={`https://image.tmdb.org/t/p/w200/${x.poster_path}`} style={myStyle}/>
                                        <h6>{ x.name }</h6>
                                    </div>
                                </div>              
                            )
                        }
                    })}
                    {nowPlayingSeriesfilter.map((x)=>{
                        if (x.poster_path != null) {
                            return(
                                <div className="col-md-2">
                                    <div class="ml-3">
                                        <img src={`https://image.tmdb.org/t/p/w200/${x.poster_path}`} style={myStyle}/>
                                        <h6>{ x.name }</h6>
                                    </div>
                                </div>              
                            )
                        }
                    })} */}
                </div>
            </div>
        </>
    );
}

export default AllMovies;