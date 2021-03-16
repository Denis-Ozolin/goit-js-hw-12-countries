import searchListTp from '../templates/search-list.hbs';
import countryCardTp from '../templates/country.hbs';
import refs from '../element-refs';
import onErrorNotification from '../utils/error-notifications';

function renderSearchList (countries){
  refs.countriesListRef.insertAdjacentHTML("beforeend", searchListTp(countries));
}

function renderCountryCard (country){
  refs.countryCardRef.insertAdjacentHTML("beforeend", countryCardTp(country));
}

function renderSearchResult(data){
  if(data.length > 10){
    onErrorNotification();
  }

  if(data.length > 1 && data.length < 10){
    renderSearchList(data);
  }

  if(data.length === 1){
    renderCountryCard(data);
  }
}

export default renderSearchResult;