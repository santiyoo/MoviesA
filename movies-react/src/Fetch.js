import axios from 'axios'

const apiKey = '828301d4bd29c42d8062e8eb994e41aa';

export const peliXId = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    return response.data
}

export const video = async (tag, id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/"${tag}"/${id}?api_key=${apiKey}`)
    return response.data
}

export const peliXTipo = async (type) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`)
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

export const popularTest = async (tag) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/${tag}/popular?api_key=${apiKey}`)
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

export const credits = async (id) =>{
    const response = await axios.get(`http://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
    return response.data
}

export const creditsTester = async (tag, id) =>{
    const response = await axios.get(`http://api.themoviedb.org/3/${tag}/${id}/credits?api_key=${apiKey}`)
    return response.data
}

export const allMovies = async (datasearch) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${datasearch}`)
    // console.log(response.data)
    return response.data
}

