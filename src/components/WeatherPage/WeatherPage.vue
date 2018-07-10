<template>
  <div id="app" class="WeatherPage">
    
    <WeatherSearch 
      :initialInputValue="currentWeatherData.placeName" />

    <WeatherResult
      :place="currentWeatherData.placeName" 
      :degrees="currentWeatherData.placeWeather.degrees" 
      :cloudiness="currentWeatherData.placeWeather.cloudiness" 
      :wind="currentWeatherData.placeWeather.wind"
      :humidity="currentWeatherData.placeWeather.humidity"
      :errorMessage="errorMessage" />
  
  </div>
</template>

<script src='./WeatherPage.js'></script>
<style src='./WeatherPage.styl' lang="stylus"></style>