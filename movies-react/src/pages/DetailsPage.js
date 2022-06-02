import poster from '../img/poster.png';
import perfil from '../img/perfil.png';
import {useParams} from "react-router-dom"; 
import { peliXId, credits } from "../Fetch";
import { useState, useEffect } from "react";

export default function DetailsPage() {
  const {id}=useParams(); 
  const [pelicula, setPelicula] = useState([]);
  const [creditos, setCreditos] = useState(undefined)

    useEffect(() => {
      peliXId(id).then((data) => {
        setPelicula(data);
      });

      credits(id).then((data) => {
        setCreditos(data);
      });
    },[])
    
    useEffect(()=>{
    }, [creditos])
    
    return creditos&& (
    <>
    {/* <div>
      User <h2>{id}</h2>
    </div> */}



    <div className="container mt-3">
      <div className="row">
          <div className="col-md-4">
              <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} alt="" width="85%"/>
          </div>
          <div className="col-md-8">
            <h2><b>{ pelicula.title }</b> ({ pelicula.release_date })</h2>
            <p>PG-13 11/11/2012 - Ciencia Ficción</p>
            <h4>Resumen</h4>
            <p>{pelicula.overview}</p>
            <div className="row">
              <div className="col-md-4">
                  <h6>Director</h6>
                  <p>{creditos.crew.original_name}</p>
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              </div>
              <div className="col-md-4">
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              </div>
              <div className="col-md-4">
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              </div>
            </div>
          </div>
      </div>

      <div className="row mt-5">
      <div className="col-md-10">
        <div className="container">
          <h2 className="section-title">Cast</h2>
          <div className="media-scroller snaps-inline">
              {creditos.cast.map((x)=>{
                if (x.profile_path != null) {
                  return(
                    <div>
                      <img src={`https://image.tmdb.org/t/p/w200/${x.profile_path}`} alt=""/>
                        <h6 className='mt-2'><b>{x.original_name}</b></h6>
                        <p><small>{ x.character }</small></p>
                    </div>
                )
              }
              })}
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <p><b>Status</b></p>
        <p>Released</p>
        <br/>
        <p><b>Status</b></p>
        <p>Released</p>
        <br/>
        <p><b>Status</b></p>
        <p>Released</p>
        <br/>
        <p><b>Status</b></p>
        <p>Released</p>
      </div>
    </div>
    </div>
    </>
  );
}
