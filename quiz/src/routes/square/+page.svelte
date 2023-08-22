<script>
	import '../../global.css';

	let sliderOne;
	let sliderTwo;
	let minGap = 0;

	function slideOne() {
		if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
			sliderOne.value = parseInt(sliderTwo.value) - minGap;
		}
	}

	function slideTwo() {
		if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
			sliderTwo.value = parseInt(sliderOne.value) + minGap;
		}
	}
</script>

<div class="bg-[#DEDEDE] w-full min-h-screen flex items-center flex-col p-12">
	<h1 class="text-black text-5xl font-[Mikro-Bold] font-bold mt-[45px]">
		площадь?
	</h1>
	<div class="values mt-[137px] flex gap-6">
		<h1 id="range1" class="text-2xl font-normal font-[Mikro-Regular]">от</h1>
		<h1 id="range2" class="text-2xl font-normal font-[Mikro-Regular]">до</h1>
	</div>

	<div class="wrapper">
		<div class="container">
			<div class="slider-track" />
			<input
				type="range"
				min="45"
				max="250"
				value="105"
				id="slider-1"
				bind:this={sliderOne}
				on:input={slideOne}
			/>
			<input
				type="range"
				min="45"
				max="250"
				value="120"
				id="slider-2"
				bind:this={sliderTwo}
				on:input={slideTwo}
			/>
		</div>
	</div>

	<button
		class="mt-[196px] w-[141px] h-[35px] bg-black text-[#DEDEDE] text-base"
	>
		выбрать всё
	</button>
</div>

<style>
	.wrapper {
		position: relative;
		width: 100%;
	}

	.container {
		position: relative;
		width: 100%;
		height: 100px;
		border: 1px solid black;
	}
	input[type='range'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 100%;
		outline: none;
		position: absolute;
		margin: auto;
		top: 0;
		bottom: 0;
		background-color: transparent;
		pointer-events: none;
	}

	.slider-track {
		width: 100%;
		height: 6px;
		background-color: red;
		position: absolute;
		margin: auto;
		top: 0;
		bottom: 0;
		border-radius: 5px;
	}

	input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		height: 5px;
	}
	input[type='range']::-moz-range-track {
		-moz-appearance: none;
		height: 5px;
	}
	input[type='range']::-ms-track {
		appearance: none;
		height: 5px;
	}
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 12px;
		width: 12px;
		background-color: #000;
		cursor: pointer;
		border-radius: 50%;
		pointer-events: auto;
		margin-top: -3px;
	}
	input[type='range']::-moz-range-thumb {
		-webkit-appearance: none;
		height: 12px;
		width: 12px;
		cursor: pointer;
		border-radius: 50%;
		background-color: black;
	}
	input[type='range']::-ms-thumb {
		-webkit-appearance: none;
		height: 12px;
		width: 12px;
		cursor: pointer;
		border-radius: 50%;
		background-color: black;
	}
</style>
