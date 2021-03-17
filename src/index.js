import debounce from 'lodash.debounce';
import './styles.css';
import refs from './markup/element-refs';
import fetchCountries from './countries-api/fetchCountries';
import clearCountrySearchResult from './markup/clear-markup';

function onResultSearch(event){
  event.preventDefault();

  const searchQuery = event.target.value.trim();
  if(searchQuery === ''){
    clearCountrySearchResult();
    return; 
  };

  fetchCountries(searchQuery);
}

refs.searchCountriesRef.addEventListener('input', debounce(onResultSearch, 500));



