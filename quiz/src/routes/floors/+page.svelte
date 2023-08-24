<script lang="ts">
	import '../../global.css';
	import { Flex } from '@svelteuidev/core';

	import firstFloorMobile from '$lib/assets/images-stories/first-floor-mobile.png';
	import firstFloorDesktop from '$lib/assets/images-stories/first-floor-desktop.png';
	import secondFloor from '$lib/assets/images-stories/secondFloor.svg';
	import { chosenFloor } from './store';
	import QuizChooseAllButton from '$lib/components/QuizChooseAllButton.svelte';
	import BottomNavigation from '$lib/components/BottomNavigation.svelte';

	$: console.log($chosenFloor);

	function handleFloor(event: MouseEvent) {
		chosenFloor.set(Number((event.target as HTMLButtonElement)?.textContent));
	}

	function handleAll() {
		chosenFloor.set('all');
	}
</script>

<Flex
	direction="column"
	class="bg-[#DEDEDE] w-full min-h-screen items-center py-10 justify-between gap-10"
>
	<h1
		class="text-5xl xl:text-[80px] 2xl:text-[110px] font-bold font-['Mikro-Bold'] lowercase"
	>
		этажность?
	</h1>
	<div class="relative">
		{#if $chosenFloor === 1 || $chosenFloor === 'all'}
			<img
				src={secondFloor}
				alt="second floor of the house"
				class={`w-[18rem] sm:w-[22rem] md:w-[30rem] lg:w-[36rem] xl:w-[40rem] ${
					$chosenFloor === 'all' ? 'absolute bottom-0 left-0' : ''
				}`}
			/>
		{/if}
		{#if $chosenFloor === 2 || $chosenFloor === 'all'}
			<picture>
				<source srcset={firstFloorDesktop} media="(min-width: 40rem)" />
				<img
					src={firstFloorMobile}
					alt="first floor of the house"
					class={`w-[18rem] sm:w-[22rem] md:w-[30rem] lg:w-[36rem] xl:w-[40rem] ${
						$chosenFloor === 'all' ? 'opacity-60' : ''
					}`}
				/>
			</picture>
		{/if}
	</div>

	<div class="flex gap-3 xl:gap-5">
		{#each [1, 2] as floor}
			<a href="/garage">
				<button
					class={`w-[2.1875rem] text-black bg-transparent md:w-[2.3rem] lg:w-[2.5rem] xl:w-[2.8rem] 2xl:w-[3.125rem]`}
					on:mouseenter={handleFloor}>{floor}</button
				>
			</a>
		{/each}
		<QuizChooseAllButton handleChoice={handleAll} page="/garage" />
	</div>

	<BottomNavigation />
</Flex>

<style>
	@font-face {
		font-family: 'Mikro-Regular';
		src: url('../assets/fonts/Mikro-Regular.otf');
	}

	:global(*) {
		font-family: 'Mikro-Regular', sans-serif;
	}

	:global(button) {
		min-width: max-content;
		border: 0.5px solid black;
		font-size: 1rem;
		font-weight: 400;
		height: 2.1875rem;
		transition: 0.3s;
	}

	:global(button):hover {
		background: black;
		color: white;
		transform: scale(1.1);
	}

	@media only screen and (min-width: 48rem) {
		:global(button) {
			font-size: 1.3rem;
			height: 2.5rem;
		}
	}

	@media only screen and (min-width: 64rem) {
		:global(button) {
			font-size: 1.5rem;
			height: 2.75rem;
		}
	}

	@media only screen and (min-width: 80rem) {
		:global(button) {
			font-size: 1.8rem;
			height: 2.875rem;
		}
	}

	@media only screen and (min-width: 96rem) {
		:global(button) {
			font-size: 1.6rem;
			height: 3rem;
		}
	}

	@media only screen and (min-height: 600px) {
		img {
			width: 330px;
		}

		:global(button) {
			font-size: 25px;
			height: 3rem;
		}
	}

	@media only screen and (min-height: 1000px) {
		img {
			width: 600px;
		}

		:global(button) {
			padding: 0 20px;
			font-size: 50px;
			height: 5rem;
		}
	}

	@media only screen and (min-height: 1366px) {
		img {
			width: 700px;
		}

		:global(button) {
			font-size: 70px;
			height: 6rem;
		}
	}

	@media only screen and (min-height: 1500px) {
		img {
			width: 850px;
		}

		:global(button) {
			padding: 5px 30px 10px;
			font-size: 70px;
			height: 7rem;
		}
	}

	@media only screen and (min-height: 1733px) {
		img {
			width: 1000px;
		}

		:global(button) {
			padding: 5px 30px 30px;
			font-size: 90px;
			height: 9rem;
		}
	}
</style>
