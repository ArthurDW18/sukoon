// ┬ ┬┌─┐┌─┐┌┬┐┬ ┬┌─┐┬─┐
// │││├┤ ├─┤ │ ├─┤├┤ ├┬┘
// └┴┘└─┘┴ ┴ ┴ ┴ ┴└─┘┴└─
// Functions to setup Weather widget.

const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');

const weather = {};
weather.temperature = {
	unit: 'celsius',
};

var tempUnit = CONFIG.weatherUnit;

const KELVIN = 273.15;
const key = `${CONFIG.weatherKey}`;
setPosition();

function setPosition(position) {
	if (!CONFIG.trackLocation || !navigator.geolocation) {
		if (CONFIG.trackLocation) {
			console.error('Geolocation not available');
		}
		getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
		return;
	}
	navigator.geolocation.getCurrentPosition(
		pos => {
			getWeather(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3));
		},
		err => {
			console.error(err);
			getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
		}
	);
}

function getWeather(latitude, longitude) {
	let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=${CONFIG.language}&appid=${key}`;
	fetch(api)
		.then(function(response) {
			let data = response.json();
			return data;
		})
		.then(function(data) {
			let celsius = Math.floor(data.main.temp - KELVIN);
			weather.temperature.value = tempUnit == 'C' ? celsius : (celsius * 9) / 5 + 32;
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
		})
		.then(function() {
			displayWeather();
		});
}

function displayWeather() {
	const iconMap = {
		'01d': 'ph-sun',
		'01n': 'ph-moon',
		'02d': 'ph-cloud-sun',
		'02n': 'ph-cloud-moon',
		'03d': 'ph-cloud',
		'03n': 'ph-cloud',
		'04d': 'ph-clouds',
		'04n': 'ph-clouds',
		'09d': 'ph-cloud-rain',
		'09n': 'ph-cloud-rain',
		'10d': 'ph-cloud-rain',
		'10n': 'ph-cloud-rain',
		'11d': 'ph-cloud-lightning',
		'11n': 'ph-cloud-lightning',
		'13d': 'ph-snowflake',
		'13n': 'ph-snowflake',
		'50d': 'ph-cloud-fog',
		'50n': 'ph-cloud-fog'
	};

	const iconClass = iconMap[weather.iconId] || 'ph-cloud';
	iconElement.innerHTML = `<i id="weatherIcon" class="ph ${iconClass}"></i>`;
	tempElement.innerHTML = `${weather.temperature.value.toFixed(0)}°<span class="unit">${tempUnit}</span>`;
	
	const capitalizedDesc = weather.description.charAt(0).toUpperCase() + weather.description.slice(1);
	descElement.innerText = capitalizedDesc;
}
