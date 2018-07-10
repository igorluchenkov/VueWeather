import store from '@/store';

export const mountGoogleApi = () => {
	return new Promise((res, rej) => {
		window.setAutocomplete = function(){
			const input = document.querySelector('.WeatherSearch-container__input');
			const autocomplete = new google.maps.places.Autocomplete(input);
		};
		
		window.initMap = function() {
			const mapCenter = new google.maps.LatLng(-33.8617374,151.2021291);
			const map = new google.maps.Map(document.getElementById('map'), { center: mapCenter });
			window.service = new google.maps.places.PlacesService(map);
		}
	
		window.initGoogleApis = function(){
			setAutocomplete();
			initMap();
			initGeocoder();
			res();
		}

		window.initGeocoder = function(){
			window.geocoder = new google.maps.Geocoder;
		}

		const autocompleteScript = document.createElement('script');
		autocompleteScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCc81QCMEY9OLLi20Ps593cuUXeH3gub8g&libraries=places&callback=initGoogleApis');
		document.querySelector('#app').appendChild(autocompleteScript);
	})
}