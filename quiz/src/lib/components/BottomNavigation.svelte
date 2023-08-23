<script>
	import '../../global.css';

	let navList = [
		{
			name: 'стиль дома',
			link: '/housestyles'
		},
		{
			name: 'площадь',
			link: '/area'
		},
		{
			name: 'этажность',
			link: '/floors'
		},
		{
			name: 'гараж',
			link: '/garage'
		},
		{
			name: 'материал',
			link: '/material'
		}
	];

	/**
	 * @type {string | null}
	 */
	let selectedLink = null; // Initialize selectedLink as null

	/**
	 * @param {string | null} link
	 */
	function handleLinkClick(link) {
		selectedLink = link; // Update selectedLink on link click
	}
</script>

<div class="flex w-full lg:mt-2 justify-center">
	<nav class="flex gap-1 md:gap-4 lg:gap-6 xl:gap-8">
		{#each navList as navItem}
			<a
				href={navItem.link}
				class="text-black text-[14px] md:text-xl font-['Mikro-Regular'] lg:text-[32px] xl:text-[46px] {navItem.link ===
				selectedLink
					? 'font-bold underline'
					: ''}"
				on:click={() => handleLinkClick(navItem.link)}
			>
				{navItem.name}
			</a>
		{/each}
	</nav>
</div>

<style>
	@media only screen and (min-height: 600px) {
		a {
			font-size: 20px;
		}
	}

	@media only screen and (min-height: 1000px) {
		a {
			font-size: 25px;
		}
	}

	@media only screen and (min-height: 1366px) {
		a {
			font-size: 30px;
		}
	}

	@media only screen and (min-height: 1500px) {
		a {
			font-size: 35px;
		}
	}

	@media only screen and (min-height: 1733px) {
		a {
			font-size: 40px;
		}
	}
</style>
