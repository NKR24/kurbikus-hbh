<script lang="ts">
	import { SvelteUIProvider, Image, Flex, Center } from '@svelteuidev/core';
	import '../../global.css';
	import BottomNavigation from '$lib/components/BottomNavigation.svelte';
	import garage from '$lib/assets/images/garage_mobile.png';

	let selectedInfo: string = '';

	function handleButtonClick(value: string) {
		selectedInfo = value;
		console.log(selectedInfo); // Log the updated value
	}
</script>

<SvelteUIProvider>
	<Center
		class="flex justify-between items-center h-screen flex-col py-2 md:py-4 lg:py-6 xl:py-8	"
	>
		<h1 class="text-5xl font-['Mikro-Bold']">Гараж</h1>
		<div class="flex flex-col gap-12 items-center">
			<img src={garage} alt="garage" class="" />
			<div>
				<button
                class="w-[114px] h-[35px] border-[0.5px] border-black border-solid text-black font-['Mikro-Regular'] text-base {selectedInfo === 'с гаражом' ? 'text-white bg-black' : ''}"
					name="с гаражом"
					value="с гаражом"
					on:click={() => handleButtonClick('с гаражом')}
				>
					с гаражом
				</button>
				<button
					class="w-[114px] h-[35px] border-[0.5px] border-black border-solid text-black font-['Mikro-Regular'] text-base {selectedInfo ===
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
					class="w-[114px] h-[35px] border-[0.5px] border-black border-solid text-black font-['Mikro-Regular'] text-base {selectedInfo ===
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
