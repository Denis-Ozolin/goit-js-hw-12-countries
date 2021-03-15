// import searchListTemplate from './templates/search-list.hbs';
// const countriesListRef = document.querySelector('.js-countries-list');

// function renderSearchList(){
//   countriesListRef.insertAdjacentHTML("beforeend", searchListTemplate);
// }
import onErrorNotification from '../utils/notifications';
import renderSearchList from '../markup/render-search-list';
// import clearSearchList from '../markup/clear-search-list';

const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

function fetchCountries(searchQuery){
  // clearSearchList(searchQuery);

  const url = BASE_URL + searchQuery;

  return fetch(url)
    .then(response => response.status == '404'
    ?onErrorNotification()
    :response.json().then(renderSearchList));
}

export default fetchCountries;

// name название
// capital столица
// population население
// languages языки
// flag флаг
