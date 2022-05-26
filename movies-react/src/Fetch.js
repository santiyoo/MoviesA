import axios from 'axios'

const apiKey = '828301d4bd29c42d8062e8eb994e41aa';

export const movieById = async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    return response.data
}

export const peliXTipo = async (type) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`)
    return response.data
}

export const nowPlaying = async () =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    return response.data
}

export const popular = async () =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    return response.data
}

export const topRated = async () =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    return response.data
}
