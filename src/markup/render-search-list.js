import searchList from '../templates/search-list.hbs';
import refs from '../element-refs';

function clearCountriesListMarkup(value){
  if(value === '') {
    refs.countriesListRef.innerHTML = '';
  } 
}

function renderSearchList (list){

  refs.countriesListRef.insertAdjacentHTML("beforeend", searchList(list));

  clearCountriesListMarkup(list);

}

export default renderSearchList;
