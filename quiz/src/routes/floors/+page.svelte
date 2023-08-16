<script lang="ts">
	import '../../global.css';
	import { Flex } from '@svelteuidev/core';

	import firstFloorMobile from '$lib/assets/images-stories/first-floor-mobile.png';
	import firstFloorDesktop from '$lib/assets/images-stories/first-floor-desktop.png';
	import secondFloor from '$lib/assets/images-stories/secondFloor.svg';
	import { chosenFloor } from './store.ts';
	import QuizTitle from '$lib/components/QuizTitle.svelte';
	import QuizChooseAllButton from '$lib/components/QuizChooseAllButton.svelte';

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
	<QuizTitle content="Этажность?" />
	<div class="relative">
		{#if $chosenFloor === 1 || $chosenFloor === 'all'}
			<img
				src={secondFloor}
				alt="second floor of the house"
				class={`w-[12.8125rem] sm:w-[18rem] md:w-[24rem] lg:w-[27rem] xl:w-[30rem] ${
					$chosenFloor === 'all' ? 'absolute bottom-0 left-0' : ''
				}`}
			/>
		{/if}
		{#if $chosenFloor === 2 || $chosenFloor === 'all'}
			<picture>
				<source srcset={firstFloorDesktop} media="(min-width: 48rem)" />
				<img
					src={firstFloorMobile}
					alt="first floor of the house"
					class={`w-[12.8125rem] sm:w-[18rem] md:w-[24rem] lg:w-[27rem] xl:w-[30rem] ${
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
					on:click={handleFloor}
					on:mouseenter={handleFloor}>{floor}</button
				>
			</a>
		{/each}
		<QuizChooseAllButton {handleAll} page="/garage" />
	</div>
</Flex>

<style>
	:global(button) {
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
			font-size: 1.0625rem;
			height: 2.5rem;
		}
	}

	@media only screen and (min-width: 48rem) {
		:global(button) {
			font-size: 1.125rem;
			height: 2.75rem;
		}
	}

	@media only screen and (min-width: 48rem) {
		:global(button) {
			font-size: 1.1875rem;
			height: 2.875rem;
		}
	}

	@media only screen and (min-width: 48rem) {
		:global(button) {
			font-size: 1.25rem;
			height: 3rem;
		}
	}
</style>
