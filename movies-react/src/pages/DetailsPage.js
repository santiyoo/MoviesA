import poster from '../img/poster.png';
import perfil from '../img/perfil.png';
import {useParams} from "react-router-dom"; 
import { peliXId, credits } from "../Fetch";
import { useState, useEffect } from "react";

export default function DetailsPage() {

  const {id}=useParams(); 
  const [pelicula, setPelicula] = useState({});
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

    const myStyle={
      backgroundImage: `url('https://image.tmdb.org/t/p/w200/${pelicula.backdrop_path}')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',  
      opacity: '50%'
    };
    return pelicula && creditos ? (
    <>

    <div className="container mt-3">
      <div className="row">
      {/* <div className="row"> */}
          <div className="col-md-4">
              <img src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} alt="" width="100%"/>
          </div>
          <div className="col-md-8">
            <h2><b>{ pelicula.title }</b></h2>
            <p><b>({ pelicula.release_date })</b> - { pelicula.genres?.map(genre => (genre.name + " - ")) }</p>
            <h4>Resumen</h4>
            <p>{pelicula.overview}</p>
 
            <div className="row">
              <div className="col-md-4">
                {creditos.crew.map((x)=>{
                  if (x.job === "Director") {
                    return(
                      <div className='ml-5'>
                        <img src={`https://image.tmdb.org/t/p/w200/${x.profile_path}`} alt="" width="40%"/>
                        <h6>{x.job}</h6>
                        <p>{ creditos.crew.filter(crew => crew.job === "Director")[0].name }</p>
                      </div>
                  )
                }
                })}
              </div>
              {/* <div className="col-md-4">
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              
                  <h6>Director</h6>
                  <p>Nombre Apellido</p>
              </div> */}
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
        <p>{pelicula.status}</p>
        <br/>
        <p><b>Orginal Language</b></p>
        <p>{ pelicula.spoken_languages?.map(spoken_languages => (spoken_languages.name)) }</p>
        <br/>
        <p><b>Budget</b></p>
        <p>${pelicula.budget}</p>
        <br/>
        <p><b>Revenue</b></p>
        <p>${pelicula.revenue}</p>
      </div>
    </div>
    </div>
    </>
  )
  : <>Cargando</>;
}
