<script>
	import '../fonts.css';
	const DATA = [
		{
			text: 'наши дома',
			image: [
				'src/assets/images/gallery-img-1.png',
				'src/assets/images/gallery-img-2.jpeg',
				'src/assets/images/gallery-img-3.png',
				'src/assets/images/gallery-img-1.png',
				'src/assets/images/gallery-img-4.png'
			]
		},
		{
			text: 'интерьер',
			image: []
		},
		{
			text: 'стройка',
			image: []
		}
	];
	let currentIndex = 0;
	function goToIndex(index) {
		currentIndex = index;
	}
</script>

<div class="text pt-[1.91rem] px-[1.37rem] bg-[#dedede]">
	<div class="flex">
		{#each DATA as section, i}
			<button
				class="carousel-button"
				class:selected={i === currentIndex}
				on:click={() => goToIndex(i)}
			>
				{section.text}
			</button>
		{/each}
	</div>

	<div class="carousel-grid mt-8">
		{#each DATA[currentIndex].image as img, i}
			{#if i < 4}
				<img src={img} alt="Carousel Image" class="carousel-image" />
			{:else}
				<img src={img} alt="Carousel Image" class="carousel-image-last" />
			{/if}
		{/each}
	</div>
</div>

<style>
	.text {
		font-family: mikro;
	}
	.carousel-button {
		padding: 8px 16px;
		border: none;
		background-color: #dedede;
		color: #000;
		cursor: pointer;
        font-size: 0.875rem;
        width: 100%;
	}

	.carousel-button.selected {
		background-color: #000; /* Change to the desired highlight color */
		color: #fff; /* Change to the desired text color */
	}

	.carousel-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr) 2fr;
		grid-column-gap: 8px;
		grid-row-gap: 8px;
	}

	.carousel-image {
		widows: 45%;
		height: 100%;
	}
	.carousel-image-last {
		grid-column: span 2;
	}
</style>
