import refs from '../element-refs';

function clearCountriesListMarkup(value){
  if(value === '') {
    refs.countriesListRef.innerHTML = '';
    return;
  } 
}

export default clearCountriesListMarkup;