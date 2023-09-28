import axios from 'axios';



axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {

    api_key: '82214decc1420629edfae943aabed99c',
    language: 'en-US',
};



export const getTrending = async () => {
    const { data } = await axios.get(`trending/movie/week`
    );

    return data;
};




export const getMoviesBySearch = async (query) => {
    const { data } = await axios.get(`search/movie`
        , {
            params: {
                query: query,
            }
        })

    return data;
};

export const getMoviesById = async movieId => {
    const { data } = await axios.get(`movie/${movieId}`
    );

    return data;
};



export const getMovieCast = async movieId => {
    const { data } = await axios.get(`movie/${movieId}/credits`
    );

    return data;
};


export const getMovieReviews = async movieId => {
    const { data } = await axios.get(`movie/${movieId}/reviews`

    );
    console.log('data :>> ', data);
    return data;
};


