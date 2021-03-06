import axios from 'axios'

const apiKey = '828301d4bd29c42d8062e8eb994e41aa';

export const video = async (tipo, id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${apiKey}`)
    return response.data
}

export const peliXTipoYTag = async (tipo, tag) => {
    const response = await axios.get(`https://api.themoviedb.org/3/${tag}/${tipo}?api_key=${apiKey}`)
    return response.data
}

export const nowPlaying = async () =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    return response.data
}

export const nowPlayingSeries = async () =>{
    const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`)
    return response.data
}

export const popular = async (tag) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    return response.data
}

export const topRated = async () =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    return response.data
}

export const topRatedSerie = async () =>{
    const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
    return response.data
}

export const credits = async (tipo, id) =>{
    const response = await axios.get(`http://api.themoviedb.org/3/${tipo}/${id}/credits?api_key=${apiKey}`)
    return response.data
}