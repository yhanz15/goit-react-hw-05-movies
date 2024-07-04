import axios from 'axios';

const API_KEY = '?api_key=183aa3d3a3509e708cca78b03bb53aa7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day${API_KEY}`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODNhYTNkM2EzNTA5ZTcwOGNjYTc4YjAzYmI1M2FhNyIsIm5iZiI6MTcyMDEzMTg5Mi4zMTA2NzYsInN1YiI6IjY2ODcyMDA1MDJkOTYxZTg2MjA3MzkzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytpOp-fjh3MJZZUpJ8qv9IpLUHgYpP6NXtSAPWDIW7M',
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async id => {
  try {
    const response = await axios.get(`movie/${id}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
      },
      params: {
        key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
      },
      params: {
        key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReview = async id => {
  try {
    const response = await axios.get(
      `/movie/${id}/reviews?language=en-US&page=1`,
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
        },
        params: {
          key: API_KEY,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByQuery = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs',
        },
        params: {
          key: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
