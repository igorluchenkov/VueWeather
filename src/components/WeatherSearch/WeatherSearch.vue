<template>
  <div 
    class="WeatherSearch"
    :class="geoMode === 'currentLocation' ? 'WeatherSearch-current-location' : ''">
    <div class="WeatherSearch-container">

      <div
        class="WeatherSearch-container__geolocation"
        @click="toggleGeoMode"
        title="Определение погоды по местоположению"></div>

      <input 
        class="WeatherSearch-container__input" 
        type="text"
        tabindex="-1" 
        ref="input"
        :value="initialInputValue"
        placeholder="Enter your city..."
        @keyup.enter="getWeatherData">

      <div 
        class="WeatherSearch-container__btn" 
        @click="getWeatherData"></div>

      <div id="map"></div>
    </div>
  </div>
</template>

<script src='./WeatherSearch.js'></script>
<style src='./WeatherSearch.styl' lang="stylus"></style>