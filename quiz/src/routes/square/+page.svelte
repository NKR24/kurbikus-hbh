<script>
	import '../../global.css';
	/**
	 * @param {{ target: any; }} event
	 */
	function updateGradient(event) {
		const inputElement = event.target;
		const value =
			((inputElement.value - inputElement.min) /
				(inputElement.max - inputElement.min)) *
			100;
		inputElement.style.background = `linear-gradient(to right, transparent 0%, transparent ${value}%, black ${value}%, black 100%)`;
	}
</script>

<div class="bg-[#DEDEDE] w-full min-h-screen flex items-center flex-col p-12">
	<h1 class="text-black text-5xl font-[Mikro-Bold] font-bold mt-[45px]">
		площадь?
	</h1>
	<div class="mt-[137px] flex gap-6">
		<h1 class="text-2xl font-normal font-[Mikro-Regular]">от 105</h1>
		<h1 class="text-2xl font-normal font-[Mikro-Regular]">до 250</h1>
	</div>
	<div class="mt-[57px] relative flex items-center w-full">
		<hr class="border-black h-[1px] rotate-90 w-[10px] absolute left-[-5px]" />
		<hr class="border-black h-[1px] rotate-90 w-[10px] absolute left-[24.5%]" />
		<hr class="border-black h-[1px] rotate-90 w-[10px] absolute left-[48.5%]" />
		<hr class="border-black h-[1px] rotate-90 w-[10px] absolute left-[72%]" />
		<hr class="border-black h-[1px] rotate-90 w-[10px] absolute left-[98%]" />
		<hr class="border-black h-[1px] w-full absolute" />

		<input
			type="range"
			min="45"
			max="250"
			value="105"
			class="appearance-none w-full h-[6px] cursor-pointer custom-range bg-gradient"
			on:input={updateGradient}
		/>
	</div>
	<button
		class="mt-[196px] w-[141px] h-[35px] bg-black text-[#DEDEDE] text-base"
	>
		выбрать всё
	</button>
</div>

<style>
	.bg-gradient {
		background: black;
	}
	.custom-range::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 12px;
		height: 12px;
		background-color: #000;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		z-index: 2;
	}
</style>
