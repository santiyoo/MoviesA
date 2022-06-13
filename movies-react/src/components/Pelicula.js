import React from "react";
import { Link } from "react-router-dom";

const Pelicula = ({pelicula}) => {
    const titulo = pelicula.title || pelicula.name
    const fecha = pelicula.release_date || pelicula.first_air_date
    return (  
        <>
        {/* {pelicula.map((x)=>{
            if (x.poster_path != null) {
                return(
                    <Link to={`/detail/${x.id}`}>
                        <div className="ml-3">
                        <img src={`https://image.tmdb.org/t/p/w200/${x.poster_path}`}  alt=""/>
                            <h6>{ titulo }</h6>
                            <p>Estreno: { fecha }</p>
                        </div>
                    </Link>
                )
            }
        })} */}
        <Link to={`/detail/${pelicula.id}`}>
            <div className="ml-3">
            <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`}  alt=""/>
                <h6>{ titulo }</h6>
                <p>Estreno: { fecha }</p>
            </div>
        </Link>
        </>
    );
}

export default Pelicula;