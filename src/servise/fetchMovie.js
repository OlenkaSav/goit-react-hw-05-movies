import toast from 'react-hot-toast';

const API_KEY = '03779c52c93ea63ebe46db37a334d7d8';
const BASE_URL = 'https://api.themoviedb.org/3/';

// метод получения массива популярных фильмов. Total_pages = 1000 по дефолту.
export const fetchPopular = async () => {
  try {
    const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log(error, 'fetchPopular');
  }
};

// метод получения массива фильмов по запросу.
export const fetchByQuery = async searchQuery => {
  try {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`;
    const response = await fetch(url);
    // mainContainerPlaceholder.classList.add('visually-hidden');
    const data = await response.json();
    // if (data.results.length === 0) {
    //   const containerCard = document.querySelector('.container-card');
    //   containerCard.innerHTML = '';
    // console.log("поймали", mainContainerPlaceholder);
    // }
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// метод получения инфо о фильме по айдишке
export const fetchById = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    toast.error('Something vent wrong:(');
    console.log(error);
  }
};

// актеры
export const fetchCredits = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    toast.error('Something vent wrong:(');
    console.log(error);
  }
};

//отзывы
export const fetchReviews = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    toast.error('Something vent wrong:(');
    console.log(error);
  }
};
