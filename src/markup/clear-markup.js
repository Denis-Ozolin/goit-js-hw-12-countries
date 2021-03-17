import refs from './element-refs';

function clearCountrySearchList(){
  refs.countriesListRef.innerHTML = '';
}

function clearCountryCard(){
  refs.countryCardRef.innerHTML = '';
}

function clearCountrySearchResult(){
  clearCountrySearchList();
  clearCountryCard();
} 

export default clearCountrySearchResult;