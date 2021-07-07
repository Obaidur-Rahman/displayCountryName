fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
                <h3 class="country-name">${country.name}</h3>
                <p>${country.capital}</p>
                <button onclick="displayCountryDetails('${country.name}')">Show details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    });

}
const displayCountryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res =>res.json())
    .then(data => renderCountryInfo(data[0]))
    
}
const renderCountryInfo = country =>{
    console.log(country);
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <p>Currencies Name: ${country.currencies[0].name}</p>
        <p>Language: ${country.languages[0].name}</p>
        <img src="${country.flag}">
        
    
    `
    

}