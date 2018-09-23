(function() {

	var url = 'https://restcountries.eu/rest/v2/name/';
	var countriesList = document.getElementById('countries');

	document.getElementById('search').addEventListener('click', searchCountries);
	document.getElementById('country-name').addEventListener('keyup', function(event){
		event.preventDefault();
		if (event.keyCode === 13) {
			searchCountries();
		}
	});

	function searchCountries() {
		var countryName = document.getElementById('country-name').value;
		if(!countryName.length) countryName = 'Poland';
		fetch(url + countryName)
			.then(function(resp) {
				return resp.json();
			})
			.then(showCountriesList);
	}

	function showCountriesList(resp) {
		countriesList.innerHTML = '';
		resp.forEach(function(item){
			var liEl = document.createElement('li');
			var img = document.createElement('img');
			img.src = item.flag;
			countriesList.appendChild(img);
			liEl.innerHTML = 'Country: ' + item.name + '<br>' + 'Capital: ' + item.capital
			+ '<br>' + 'Land area: ' + item.area + ' sq. km' + '<br>'
			+ 'Population: ' + item.population;
			countriesList.appendChild(liEl);
		});
	}


})();
