import store from '@/store';

export default {
  name: 'WeatherResult',
  props: {
    cloudiness: Number,
    wind: Number,
    humidity: Number,
    degrees: Number,
    place: String,
    errorMessage: String,
  },
  computed: {
    appHasWeatherData(){
      return store.state.currentWeatherData.placeName === '' ? false : true;
    },
    appHasErrors(){
      return store.state.errorMessage === '' ? false : true;
    }
  }
}