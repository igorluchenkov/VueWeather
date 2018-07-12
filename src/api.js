import store from '@/store';
import Cookie from 'js-cookie';

export const getPlaceWeather = async ({ lat, lon }) => {
	return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${store.state.weatherApiKey}`)
	.then(r => r.json())
	.then(({ main, clouds, wind }) => ({
		degrees: main.temp,
		cloudiness: clouds.all,
		wind: wind.speed,
		humidity: main.humidity
	}));
}
