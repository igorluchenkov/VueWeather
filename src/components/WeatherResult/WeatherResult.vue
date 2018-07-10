<template>
	<div class="WeatherResult">

		<div
			v-if="appHasErrors"
			class="WeatherResult-error">{{ errorMessage }}</div>

		<div 
			v-if="appHasWeatherData" 
			class="WeatherResult-container">

				<div class="WeatherResult-container__place">
					{{ place }}
				</div>

				<div class="WeatherResult-container__degrees">
					{{ (degrees / 10).toFixed(1) }} &deg;C
				</div>

				<div class="WeatherResult-table">
					<div class="WeatherResult-table__row">
						<div class="WeatherResult-table__col">Облачность</div>
						<div class="WeatherResult-table__col">{{ cloudiness }} %</div>
					</div>
					<div class="WeatherResult-table__row">
						<div class="WeatherResult-table__col">Ветер</div>
						<div class="WeatherResult-table__col">{{ wind }} m/s</div>
					</div>
					<div class="WeatherResult-table__row">
						<div class="WeatherResult-table__col">Влажность</div>
						<div class="WeatherResult-table__col">{{ humidity }} %</div>
					</div>
				</div>
				
		</div>

	</div>
</template>

<script src='./WeatherResult.js'></script>
<style src='./WeatherResult.styl' lang="stylus"></style>