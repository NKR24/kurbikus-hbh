<script>
	import '../../global.css';
	import { onMount } from 'svelte';
	import BottomNavigation from '../../lib/components/BottomNavigation.svelte';

	let sliderOne;
	let sliderTwo;
	let displayValOne = 'от 105';
	let displayValTwo = 'до 250';
	let minGap = 0;
	let sliderTrack;
	let sliderMaxValue;
	const dotValues = [45, 90, 135, 175, 250];
	onMount(() => {
		displayValOne = 'от 105';
		displayValTwo = 'до 250';
		sliderMaxValue = sliderOne.max;
		fillColor();
	});

	function slideOne() {
		if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
			sliderOne.value = parseInt(sliderTwo.value) - minGap;
		}
		requestAnimationFrame(() => {
			displayValOne = `от ${sliderOne.value}`;
		});
		fillColor();
	}

	function slideTwo() {
		if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
			sliderTwo.value = parseInt(sliderOne.value) + minGap;
		}
		requestAnimationFrame(() => {
			displayValTwo = `до ${sliderTwo.value}`;
		});
		fillColor();
	}

	function fillColor() {
		let range = sliderMaxValue - 45;
		let percent1 = ((sliderOne.value - 45) / range) * 100;
		let percent2 = ((sliderTwo.value - 45) / range) * 100;
		sliderTrack.style.background = `linear-gradient(to right, transparent ${percent1}%, black ${percent1}%, black ${percent2}%, transparent ${percent2}%)`;
	}
</script>

<div
	class="bg-[#DEDEDE] w-full min-h-screen flex items-center flex-col p-12 lg:p-0 lg:pb-20"
>
	<h1
		class="text-black text-5xl font-[Mikro-Bold] font-bold mt-[45px] lg:text-[110px]"
	>
		площадь?
	</h1>
	<div class="values mt-[130px] flex gap-6">
		<h1
			id="range1"
			bind:this={displayValOne}
			class="text-5xl font-normal font-[Mikro-Regular]"
		>
			{displayValOne}
		</h1>
		<h1
			id="range2"
			bind:this={displayValTwo}
			class="text-5xl font-normal font-[Mikro-Regular]"
		>
			{displayValTwo}
		</h1>
	</div>

	<div class="relative w-full max-w-[300px] lg: mt-[89px] lg:max-w-[825px]">
		<div class="container relative w-full">
			<div
				class="w-full h-[6px] absolute m-auto top-0 bottom-0 rounded-[5px] lg:h-[15px]"
				bind:this={sliderTrack}
			/>
			<div class="w-full h-[1px] bg-black absolute top-[50%] lg:h-[2px]" />
			<div
				class="flex justify-between absolute w-full top-[20px] lg:top-[-40px]"
			>
				<h1 class="font-[Mikro-Regular] text-[16px] font-normal ml-[-10px]">
					45
				</h1>
				<h1
					class="font-[Mikro-Regular] text-[16px] font-normal ml-[18px] lg:ml-[30px]"
				>
					90
				</h1>
				<h1
					class="font-[Mikro-Regular] text-[16px] font-normal ml-[7px] lg:ml-[10px]"
				>
					135
				</h1>
				<h1
					class="font-[Mikro-Regular] text-[16px] font-normal mr-[40px] lg:mr-[130px]"
				>
					175
				</h1>
				<h1 class="font-[Mikro-Regular] text-[16px] font-normal mr-[-10px]">
					250
				</h1>
			</div>
			<div
				class="dots flex relative top-[-5px] bottom-[50%] w-full lg:top-[-12px]"
			>
				<div
					class="h-[10px] w-[0.5px] bg-black absolute left-0 lg:h-[24.5px] lg:w-[1px]"
				/>
				<div
					class="h-[10px] w-[0.5px] bg-black absolute left-[22.9%] lg:h-[24.5px] lg:w-[1px]"
				/>
				<div
					class="h-[10px] w-[0.5px] bg-black absolute left-[44.2%] lg:h-[24.5px] lg:w-[1px]"
				/>
				<div
					class="h-[10px] w-[0.5px] bg-black absolute left-[62.8%] lg:h-[24.5px] lg:w-[1px]"
				/>
				<div
					class="h-[10px] w-[0.5px] bg-black absolute left-[100%] lg:h-[24.5px] lg:w-[1px]"
				/>
			</div>
			<input
				type="range"
				step="1"
				min="45"
				max="250"
				value="105"
				id="slider-1"
				bind:this={sliderOne}
				on:input={slideOne}
			/>
			<input
				type="range"
				step="1"
				min="45"
				max="250"
				value="250"
				id="slider-2"
				bind:this={sliderTwo}
				on:input={slideTwo}
			/>
		</div>
	</div>

	<button
		class="mt-[196px] w-[141px] h-[35px] mb-[72px] bg-black text-[#DEDEDE] text-base lg:bg-transparent lg:border-black lg:border-[1px] lg:w-[204px] lg:h-12 lg:text-xl lg:text-black"
	>
		выбрать всё
	</button>
	<BottomNavigation />
</div>
