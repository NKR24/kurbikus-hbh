<script lang="ts">
	import '../../global.css';
	import { Flex } from '@svelteuidev/core';
	import QuizTitle from '$lib/components/QuizTitle.svelte';
	import QuizChooseAllButton from '$lib/components/QuizChooseAllButton.svelte';
	import material1Desktop from '$lib/assets/images-material/material1-desktop.png';
	import material1Mobile from '$lib/assets/images-material/material1-mobile.png';
	import material2Desktop from '$lib/assets/images-material/material2-desktop.png';
	import material2Mobile from '$lib/assets/images-material/material2-mobile.png';
	import material3Desktop from '$lib/assets/images-material/material3-desktop.png';
	import material3Mobile from '$lib/assets/images-material/material3-mobile.png';
	import material4Desktop from '$lib/assets/images-material/material4-desktop.png';
	import material4Mobile from '$lib/assets/images-material/material4-mobile.png';
	import material5Desktop from '$lib/assets/images-material/material5-desktop.png';
	import material5Mobile from '$lib/assets/images-material/material5-mobile.png';
	import { material } from './store';

	const materials = [
		{
			name: 'деревянный каркас',
			imageMobile: material1Mobile,
			imageDesktop: material1Desktop,
			alt: 'wood frame/деревянный каркас'
		},
		{
			name: 'клееный брус',
			imageMobile: material2Mobile,
			imageDesktop: material2Desktop,
			alt: 'glued laminated timber/клееный брус'
		},
		{
			name: 'керамоблок',
			imageMobile: material3Mobile,
			imageDesktop: material3Desktop,
			alt: 'ceramic block/керамоблок'
		},
		{
			name: 'каркас',
			imageMobile: material4Mobile,
			imageDesktop: material4Desktop,
			alt: 'frame/каркас'
		},
		{
			name: 'кирпич',
			imageMobile: material5Mobile,
			imageDesktop: material5Desktop,
			alt: 'brick/кирпич'
		}
	];

	$: console.log($material);

	function handleAll() {
		material.set('all');
	}

	function handleMaterial(event: MouseEvent) {
		material.set((event.target as HTMLButtonElement).textContent);
	}
</script>

<Flex
	direction="column"
	class="bg-[#DEDEDE] w-full min-h-screen items-center py-10 justify-between gap-10"
>
	<QuizTitle content="материал?" />

	<Flex
		class="flex-wrap gap-10 justify-center items-end w-[186px] sm:w-[28.125rem] md:w-[30rem] lg:w-[40rem] lg:justify-between xl:w-[65rem] 2xl:w-[70rem]"
	>
		{#each materials as material}
			<Flex
				direction="column"
				class={`items-center ${
					material.name === 'деревянный каркас'
						? '2xl:order-1'
						: material.name === 'клееный брус'
						? '2xl:order-2'
						: material.name === 'каркас'
						? '2xl:order-3'
						: material.name === 'керамоблок'
						? '2xl:order-4'
						: material.name === 'кирпич'
						? '2xl:order-5'
						: ''
				}`}
			>
				<picture>
					<source srcset={material.imageDesktop} media="(min-width: 64rem)" />
					<img src={material.imageMobile} alt={material.alt} />
				</picture>
				<a href="/contacts">
					<button on:click={handleMaterial}>{material.name}</button>
				</a>
			</Flex>
		{/each}
		<QuizChooseAllButton page="/contacts" handleChoice={handleAll} />
	</Flex>
</Flex>

<style>
	* {
		font-family: 'Mikro-Regular';
	}
	:global(a) {
		order: 6;
	}

	:global(button) {
		min-width: max-content;
		display: flex;
		align-items: center;
		color: black;
		border: 0.5px solid black;
		font-size: 1rem;
		font-weight: 400;
		height: 2.1875rem;
		transition: 0.3s;
		padding: 0.625rem 1.25rem;
	}

	:global(button):hover {
		background: black;
		color: white;
		transform: scale(1.1);
	}

	@media only screen and (min-width: 48rem) {
		:global(button) {
			font-size: 1.0625rem;
			padding: 0.625rem 1.375rem;
		}
	}

	@media only screen and (min-width: 64rem) {
		:global(button) {
			font-size: 1.125rem;
			padding: 0.625rem 1.5625rem;
		}
	}

	@media only screen and (min-width: 80rem) {
		:global(button) {
			font-size: 1.1875rem;
			padding: 0.625rem 1.75rem;
		}
	}

	@media only screen and (min-width: 96rem) {
		:global(button) {
			font-size: 1.25rem;
			padding: 0.625rem 1.875rem;
		}
	}
</style>
