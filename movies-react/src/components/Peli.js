import React from "react";
import { Link } from "react-router-dom";

const Pelicula = ({pelicula}) => {
    const titulo = pelicula.title || pelicula.name
    const fecha = pelicula.release_date || pelicula.first_air_date
    const tipo = pelicula.title ? 'movie' : 'tv'
    const myStyle={
        borderRadius: "10px",
    };
    return (  
        <>
            <Link to={`/detail/${tipo}/${pelicula.id}`}>
                <div>
                <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}  style={myStyle}/>
                    <h6>{ titulo }</h6>
                </div>
            </Link>
        </>
    );
}

export default Pelicula;