<script>
	import CatalogCard from '../components/CatalogCard.svelte';
	import '../fonts.css';
	const data = [
		{
			image: 'src/assets/images/imageh1.png',
			square: 'Площадь: от 90 м²',
			bedrooms: '3 спальни, 1 санузел.',
			price: 'От 4 300 000 руб.',
			index: 1
		},
		{
			image: 'src/assets/images/imageh2.png',
			square: 'Площадь: от 90 м²',
			bedrooms: '3 спальни, 1 санузел.',
			price: 'От 4 600 000 руб.',
			index: 2
		},
		{
			image: 'src/assets/images/imageh3.png',
			square: 'Площадь: от 110 м²',
			bedrooms: '3 спальни, 1 санузел.',
			price: 'От 4 000 000 руб.',
			index: 3
		},
		{
			image: 'src/assets/images/imageh4.jpeg',
			square: 'Площадь: от 110 м²',
			bedrooms: '3 спальни, 1 санузел.',
			price: 'От 3 900 000 руб.',
			index: 4
		}
	];
</script>

<div
	class="bg-[#3E3E3E;] text text-[#dedede] sm: pl-[1.37rem] pr-[1.25rem] pb-1"
>
	<h2 class="text-[0.75rem] pt-[1.13rem] mb-[1.37rem]">
		каталоги домов с ценами
	</h2>
	{#each data as item, i}
		<CatalogCard {...item} />
	{/each}
</div>

<style>
	.text {
		font-family: mikro;
	}
</style>
