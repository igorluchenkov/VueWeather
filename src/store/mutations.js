import Vue from 'vue';
import store from '@/store';

export const UPDATE_WEATHER_DATA = (state, { place, coordinates, weather }) => {
	Vue.set(state, 'currentWeatherData', {
		placeName: place, 
		placeCoordinates: coordinates, 
		placeWeather: weather
	});
}

export const CLEAR_WEATHER_DATA = (state) => {
	Vue.set(state, 'currentWeatherData', {
		placeName: '', 
		placeCoordinates: {}, 
		placeWeather: {}
	});
}

export const SET_ERROR_MESSAGE = (state, message) => {
	Vue.set(state, 'errorMessage', message);
}

export const TOGGLE_GEO_MODE = (state) => {
	Vue.set(state, 'geoMode', state.geoMode === 'currentLocation' ? 'searchLocation' : 'currentLocation');
}