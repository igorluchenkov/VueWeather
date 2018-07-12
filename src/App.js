import store from '@/store';
import Cookie from 'js-cookie';
import { getPlaceWeather } from '@/api.js';

export default {
  name: 'App',
}

export const getWeatherData = async ({ place, coordinates }) => {
	if(!coordinates) {
		coordinates = await getPlaceCoordinates(place);
	} else if(!place) {
		place = await getPlaceName(coordinates);
	}
	const weather = await getPlaceWeather(coordinates);

	const weatherData = { place, coordinates, weather };

	store.commit('UPDATE_WEATHER_DATA', weatherData);
	Cookie.set('weatherData', weatherData);
}

export const getPlaceCoordinates = async (place) => {
	const request = {
		query: place,
		fields: ['geometry'],
	}

	return new Promise((res, rej) => {
		window.service.findPlaceFromQuery(request, r => {
			if(!r) {
				clearWeatherData();
				store.commit('SET_ERROR_MESSAGE', `Can't find any places named «${place}»`)
			} else {
				res({
					lat: r[0].geometry.location.lat(),
					lon: r[0].geometry.location.lng(),
				})
				store.commit('SET_ERROR_MESSAGE', '');
			}
		});
	});
}

export const getPlaceName = async ({ lat, lon: lng }) => {
	return new Promise((res, rej) => {
		window.geocoder.geocode({'location': {lat, lng}}, r => {
			const address = r[0].address_components.find(el => {
				return el.types[0] === 'locality' && el.types[1] === 'political'
			}).long_name;
			res(address);
		});
	})
}

export const getCurrentCoordinates = async () => {
	return new Promise((res, rej) => {
		navigator.geolocation.getCurrentPosition(r => {
			res({ 
				lat: r.coords.latitude,
				lon: r.coords.longitude,
			})
		}, err => {
			if(err.code === 1) {
				store.commit('SET_ERROR_MESSAGE', `Oops, it's seems like you denied Geolocation.`);
			} else {
				store.commit('SET_ERROR_MESSAGE', `Oops, something went wrong. Please, try again later.`);
			}
			clearWeatherData();
			Cookie.remove('geoMode');
		});
	})
}

export const clearWeatherData = () => {
	store.commit('CLEAR_WEATHER_DATA');
	Cookie.remove('weatherData');
}

export const toggleGeoMode = async () => {
	store.commit('TOGGLE_GEO_MODE');
	Cookie.set('geoMode', store.state.geoMode);

	if(store.state.geoMode === 'currentLocation') {
		const coordinates = await getCurrentCoordinates();
		getWeatherData({ coordinates });

		if(store.state.errorMessage !== '') {
			store.commit('SET_ERROR_MESSAGE', '');
		}
	}
}