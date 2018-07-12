import { getWeatherData, toggleGeoMode } from '@/App.js';
import store from '@/store';

export default {
	name: 'WeatherSearch',
	props: {
		initialInputValue: String,
	},
	methods: {
    getWeatherData() {
			const place = this.$refs.input.value;
      getWeatherData({ place });
    },
		toggleGeoMode(){
			toggleGeoMode();
		}
	},
	computed: {
		geoMode(){
			return store.state.geoMode;
		}
	}
}