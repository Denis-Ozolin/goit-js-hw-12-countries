import renderSearchResult from '../markup/render-markup';

const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

function fetchCountries(searchQuery){
  const url = BASE_URL + searchQuery;

  return fetch(url)
    .then(response => response.json())
    .then(renderSearchResult)
}

export default fetchCountries;

