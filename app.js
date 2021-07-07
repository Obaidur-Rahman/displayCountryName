fetch('https://restcountries.eu/rest/v2/all')
.then(response =>response.json())
.then( data => displayCountries(data))


const displayCountries = countries =>{
    const countriesDiv = document.getElementById('country');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        const countryInfo = `
                <h3>${country.name}</h3>
                <p>${country.capital}</p>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}