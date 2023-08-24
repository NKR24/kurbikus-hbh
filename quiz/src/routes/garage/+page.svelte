<script lang="ts">
	import { SvelteUIProvider, Image, Flex, Center } from '@svelteuidev/core';
	import '../../global.css';
	import BottomNavigation from '$lib/components/BottomNavigation.svelte';
	import garage from '$lib/assets/images/garage_mobile.png';
	import garage_desktop from '$lib/assets/images/garage_desktop.png';

	let selectedInfo: string = '';

	function handleButtonClick(value: string) {
		selectedInfo = value;
		console.log(selectedInfo); // Log the updated value
	}

	let isMobile = false;

	function handleResize() {
		isMobile = window.innerWidth < 768;
	}
</script>

<svelte:window on:resize={handleResize} />

<SvelteUIProvider>
	<Center
		class="flex justify-between items-center  h-screen flex-col py-4 md:py-4 2xl:py-14 2xl:pt-[75px] bg-[#DEDEDE]"
	>
		<h1 class="text-5xl font-['Mikro-Bold'] lg:text-[110px]!">гараж?</h1>
		<div class="flex flex-col gap-14 items-center">
			{#if isMobile}
				<img src={garage} alt="garage" class="image ml-[28px]" />
			{:else}
				<img src={garage_desktop} alt="garage" class="image ml-[100px]" />
			{/if}

			<div class="flex gap-2 md:gap-8">
				<button
					class="w-[114px] h-[35px] md:w-[171px] md:h-[48px] xl:w-[204px] 2xl:h-[48px] border-[0.5px] border-black border-solid text-black font-['Mikro-Regular'] text-base md:text-xl xl:text-[20px] {selectedInfo ===
					'с гаражом'
						? 'text-white bg-black'
						: ''}"
					name="с гаражом"
					value="с гаражом"
					on:click={() => handleButtonClick('с гаражом')}
				>
					с гаражом
				</button>
				<button
					class="w-[114px] h-[35px] md:w-[171px] md:h-[48px] xl:w-[204px] 2xl:h-[48px] border-[0.5px] border-black border-solid text-black font-['Mikro-Regular'] text-base md:text-xl xl:text-[20px] {selectedInfo ===
					'без гаража'
						? 'text-white bg-black'
						: ''}"
					name="без гаража"
					value="без гаража"
					on:click={() => handleButtonClick('без гаража')}
				>
					без гаража
				</button>
				<button
					class="w-[114px] h-[35px] md:w-[171px] md:h-[48px] xl:w-[204px] 2xl:h-[48px] border-[0.5px] border-black border-solid text-black font-['Mikro-Regular'] text-base md:text-xl xl:text-[20px] {selectedInfo ===
					'выбрать всё'
						? 'text-white bg-black'
						: ''}"
					name="выбрать всё"
					value="выбрать всё"
					on:click={() => handleButtonClick('выбрать всё')}
				>
					выбрать всё
				</button>
			</div>
		</div>

		<BottomNavigation />
	</Center>
</SvelteUIProvider>

<style>
	@media (min-width: 800px) and (min-height: 600px) {
		h1 {
			font-size: 30px;
		}

		.image {
			width: 320px;
		}
	}
	@media (min-width: 820px) and (min-height: 1180px) {
		h1 {
			font-size: 64px;
		}
		.image {
			width: 500px;
		}
	}

	@media (min-width: 912px) and (min-height: 1368px) {
		h1 {
			font-size: 64px;
		}
		.image {
			width: 500px;
		}
	}

	@media (min-width: 1024px) {
		h1 {
			font-size: 110px;
		}
		.image {
			width: 576px;
		}
	}
</style>
