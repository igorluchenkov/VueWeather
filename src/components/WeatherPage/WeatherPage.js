import WeatherSearch from '../WeatherSearch/WeatherSearch.vue';
import WeatherResult from '../WeatherResult/WeatherResult.vue';
import store from '@/store';
import { getWeatherData, toggleGeoMode } from '@/App.js';
import { mountGoogleApi } from '@/helpers.js';
import Cookie from 'js-cookie';

export default {
  name: 'WeatherPage',
  components: { WeatherSearch, WeatherResult },
  computed: {
    currentWeatherData() {
      return store.state.currentWeatherData;
    },
    errorMessage() {
      return store.state.errorMessage;
    }
  },
  mounted () {
		const mounting = mountGoogleApi();

    const weatherData = Cookie.getJSON('weatherData');
    const geoMode = Cookie.get('geoMode');

    if(weatherData) {
      store.commit('UPDATE_WEATHER_DATA', weatherData);
      mounting.then(() => {
        if(geoMode !== 'currentLocation') {
          const place = store.state.currentWeatherData.placeName;
          getWeatherData({ place }) 
        } else {
          toggleGeoMode();
        }
      });
    }
  }
}