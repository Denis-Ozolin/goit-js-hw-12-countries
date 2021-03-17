import searchListTp from '../templates/search-list.hbs';
import countryCardTp from '../templates/country.hbs';
import refs from './element-refs';
import onErrorNotification from '../utils/error-notifications';
import clearCountrySearchResult from './clear-markup';

function renderSearchList (countries){
  refs.countriesListRef.insertAdjacentHTML("afterbegin", searchListTp(countries));
}

function renderCountryCard (country){
  refs.countryCardRef.insertAdjacentHTML("afterbegin", countryCardTp(country));
}

function renderSearchResult(data){
  clearCountrySearchResult();

  if(data.length === 1){
    renderCountryCard(data);
  }

  else if(data.length > 1 && data.length <= 10){
    renderSearchList(data);
  }

  else{
    onErrorNotification();
  }
}

export default renderSearchResult;