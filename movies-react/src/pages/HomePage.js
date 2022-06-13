import Bloque from "../components/bloque";
import Header from "../components/Header";
import { nowPlaying, popular, topRated, peliXTipoYTag, popularTest, allMovies } from "../Fetch";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [peliculasnp, setPeliculasnp] = useState([]);
  const [peliculasp, setPeliculasp] = useState([]);
  const [peliculastr, setPeliculastr] = useState([]);
  const [peliculasnpfilter, setPeliculasnpFilter] = useState([]);
  const [peliculaspfilter, setPeliculaspFilter] = useState([]);
  const [peliculastrfilter, setPeliculastrFilter] = useState([]);
  const [populars, setPopulars] = useState([])
  const [popularsfilter, setPopularsFilter] = useState([])

  const [topRateds, setTopRateds] = useState([])
  const [topRatedsfilter, setTopRatedsFilter] = useState([])

  const [nowPlayingS, setNowPlayingSeries] = useState([])
  const [nowPlayingSeriesfilter, setNowPlayingSeriesFilter] = useState([])
  const [tag, setTag] = useState("")
  const [tipo, setTipo] = useState("")
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    nowPlaying().then((data) => {
      setPeliculasnp(data.results);
      setPeliculasnpFilter(data.results);
    })
    popular().then((data) => {
      setPeliculasp(data.results);
      setPeliculaspFilter(data.results)
    })
    topRated().then((data) => {
      setPeliculastr(data.results);
      setPeliculastrFilter(data.results)
    })
  },[]);

  useEffect(()=>{
    peliXTipoYTag(tipo, tag).then((data) => {
      setPeliculasp(data.results);
      setPeliculaspFilter(data.results)
    })
  },[tag])

  useEffect(()=>{
    setPeliculasnpFilter(peliculasnp.filter(x=>x.title.includes(filtro)))
    setPeliculaspFilter(peliculasp.filter(x=>x.title.includes(filtro)))
    setPeliculastrFilter(peliculastr.filter(x=>x.title.includes(filtro)))
    setPopularsFilter(populars.filter(x=>x.name.includes(filtro)))
    setTopRatedsFilter(topRateds.filter(x=>x.name.includes(filtro)))
    setNowPlayingSeriesFilter(nowPlayingS.filter(x=>x.name.includes(filtro)))
  },[filtro])

  const arrayTituloFilt = [
    {
      titulo: "Playing",
      filtros: [{nombre: 'Cines', tag:'movie', tipo: 'now_playing'}, {nombre: 'Television', tag: 'tv', tipo: 'airing_today'}]

    },
    {
      titulo: "Popular",
      filtros: [{nombre: 'Peliculas', tag:'movie', tipo:'popular'}, {nombre: 'Television', tag: 'tv', tipo:'popular'}]
    },
    {
      titulo: "Top Rated",
      filtros: [{nombre: 'Peliculas', tag:'movie', tipo: 'top_rated'}, {nombre: 'Television', tag: 'tv', tipo: 'top_rated'}]
    }
  ]
  
  function changeTag(titulo, tag, tipo){
    if(titulo === 'Top Rated')
    {
      peliXTipoYTag(tipo, tag).then((data) => {
        setPeliculastr(data.results);
        setPeliculastrFilter(data.results)
      })
    }
    else if(titulo === 'Popular'){
      peliXTipoYTag(tipo, tag).then((data) => {
        setPeliculasp(data.results);
        setPeliculaspFilter(data.results)
      })
    }
    else if(titulo === 'Playing'){
      peliXTipoYTag(tipo, tag).then((data) => {
        setPeliculasnp(data.results);
        setPeliculasnpFilter(data.results)
      })
    }
  }

  return (
    <>
      <Header setFiltro={setFiltro}/>

      <Bloque Peliculas={peliculasnpfilter} titulo={arrayTituloFilt[0].titulo} filtros={arrayTituloFilt[0].filtros} changeTag={changeTag}/>
      <Bloque Peliculas={peliculaspfilter} titulo={arrayTituloFilt[1].titulo} filtros={arrayTituloFilt[1].filtros} changeTag={changeTag}/>
      <Bloque Peliculas={peliculastrfilter} titulo={arrayTituloFilt[2].titulo} filtros={arrayTituloFilt[2].filtros} changeTag={changeTag}/>
    </>
  );
}
