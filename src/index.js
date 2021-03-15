import debounce from 'lodash.debounce';
import './styles.css';
import fetchCountries from './countries-api/fetchCountries';
import refs from './element-refs';
// import clearSearchList from './markup/clear-search-list';


function onResultSearchList(event){
  event.preventDefault();

  const searchQuery = event.target.value;

  // clearSearchList(searchQuery);
  fetchCountries(searchQuery);
}

refs.searchCountriesRef.addEventListener('input', debounce(onResultSearchList, 1000));



