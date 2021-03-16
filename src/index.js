import debounce from 'lodash.debounce';
import './styles.css';
import fetchCountries from './countries-api/fetchCountries';
import refs from './markup/element-refs';

function clearCountrySearchResult(){
  refs.countriesListRef.innerHTML = '';
  refs.countryCardRef.innerHTML = '';
} 

function onResultSearch(event){
  event.preventDefault();

  const searchQuery = event.target.value;
  if(searchQuery === ''){
    clearCountrySearchResult();
    return; 
  };

  fetchCountries(searchQuery);
}

refs.searchCountriesRef.addEventListener('input', debounce(onResultSearch, 500));



