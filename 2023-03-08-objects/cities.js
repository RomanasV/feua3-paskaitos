let citiesList =  [
  {
    name: 'London',
    population: 11120000,
    location: {
      continent: 'Europe',
      country: 'United Kingdom',
    },
    touristAttractions: ['Big Ben'],
    isCapital: true
  },
  {
    name: 'Paris',
    population: 11027000,
    location: {
      continent: 'Europe',
      country: 'France',
    },
    touristAttractions: [],
    isCapital: true
  },
  {
    name: 'New York',
    population: 19294000,
    location: {
      continent: 'North America',
      country: 'United States of America',
    },
    touristAttractions: ['Metropolitan Museum', 'Central Park', 'Modern Art Museum'],
    isCapital: false
  },
  {
    name: 'Dubai',
    population: 6595000,
    location: {
      continent: 'Asia',
      country: 'United Arab Emirates',
    },
    touristAttractions: ['Burj Khalifa', 'Burj Al Arab', 'Dubai Mall'],
    isCapital: false
  },
  {
    name: 'Tokyo',
    population: 39105000,
    location: {
      continent: 'Asia',
      country: 'Japan',
    },
    touristAttractions: ['Senso-ji', 'Tokyo Skytree', 'Meiji Jingu'],
    isCapital: true
  },
  {
    name: 'Singapore',
    population: 5901000,
    location: {
      continent: 'Asia',
      country: 'Singapore',
    },
    touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa'],
    isCapital: true
  },
  {
    name: 'Los Angeles',
    population: 13250000,
    location: {
      continent: 'North America',
      country: 'United States of America',
    },
    touristAttractions: ['Museum of Art', 'Disneyland Park', 'Santa Monica Pie'],
    isCapital: false
  },
  {
    name: 'Barcelona',
    population: 4735000,
    location: {
      continent: 'Europe',
      country: 'Spain',
    },
    touristAttractions: ['La Sagrada Familia', 'Park Guell', 'Casa Batllo'],
    isCapital: false
  },
  {
    name: 'Rio de Janeiro',
    population: 6748000,
    location: {
      continent: 'South America',
      country: 'Brazil',
    },
    touristAttractions: ['Christ the Redeemer', 'Sugaloaf Mountain', 'Copacabana Beach'],
    isCapital: false
  },
];


function renderCities(cities) {
  const citiesListElement = document.querySelector('#cities');

  cities.forEach(city => {
    let capitalTitle = '';
    let capitalText = '';
    let capitalClass = '';

    if (city.isCapital) {
      capitalTitle = ' (capital)';
      capitalText = ` ${city.name} is the capital of ${city.location.country}.`;
      capitalClass = ' capital';
    }
  
    let touristAttractionsElement = '';

    if (city.touristAttractions.length > 0) {
      let touristAttractionItems = '';
      let touristAttractionTitle = `Main Tourist attraction of ${city.name} is:`;
      
      city.touristAttractions.map(attraction => {
        touristAttractionItems += '<li>' + attraction + '</li>';
      })

      if (city.touristAttractions.length > 1) {
        touristAttractionTitle = `Main Tourist attractions of ${city.name} are:`;
      }

      touristAttractionsElement = `<h3>${touristAttractionTitle}</h3>
                                   <ul>${touristAttractionItems}</ul>`;
    }

    citiesListElement.innerHTML += `<div class="city-item${capitalClass}">
                                      <h2>${city.name}${capitalTitle}</h2>
                                      <p>${city.name} city is located in ${city.location.continent}, ${city.location.country} and has population of ${city.population} people.${capitalText}</p>
                                      ${touristAttractionsElement}
                                    </div>`;
  });
}

renderCities(citiesList);
