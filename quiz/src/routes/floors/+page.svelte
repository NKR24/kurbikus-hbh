<script lang="ts">
	import '../../global.css';
	import { Flex } from '@svelteuidev/core';

	import oneFloorMobile from '$lib/assets/images-stories/one-floor-mobile.png';
	import oneFloorDesktop from '$lib/assets/images-stories/one-floor-desktop.png';
	import { chosenFloor } from './store.ts';
	import QuizTitle from '$lib/components/QuizTitle.svelte';
	import QuizChooseAllButton from '$lib/components/QuizChooseAllButton.svelte';

	$: console.log($chosenFloor);

	function handleFloor(event: MouseEvent) {
		chosenFloor.set(Number((event.target as HTMLButtonElement)?.textContent));
	}

	function handleChoice() {
		if ($chosenFloor) console.log(`you chose ${$chosenFloor}`);
	}
</script>

<Flex
	direction="column"
	class="bg-[#DEDEDE] w-full min-h-screen items-center py-10 justify-between gap-10"
>
	<QuizTitle content="Этажность?" />
	<picture>
		<source srcset={oneFloorDesktop} media="(min-width: 48rem)" />
		<img
			src={oneFloorMobile}
			alt="one story house"
			class="sm:w-[18rem] md:w-[24rem] lg:w-[27rem] xl:w-[30rem]"
		/>
	</picture>

	<div class="flex gap-3 xl:gap-5">
		{#each [1, 2] as floor}
			<button
				class={`w-[2.1875rem] text-black bg-transparent md:w-[2.3rem] lg:w-[2.5rem] xl:w-[2.8rem] 2xl:w-[3.125rem]`}
				on:click={handleFloor}>{floor}</button
			>
		{/each}
		<QuizChooseAllButton {handleChoice} />
	</div>
</Flex>

<style>
	:global(button) {
		border: 0.5px solid black;
		font-size: 1rem;
		font-weight: 400;
		height: 2.1875rem;
	}

	:global(button):focus {
		background: black;
		color: white;
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
