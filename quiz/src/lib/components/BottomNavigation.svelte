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
	<nav class="flex gap-2 md:gap-4 lg:gap-6 xl:gap-8">
		{#each navList as navItem}
			<a
				href={navItem.link}
				class="text-[13px] md:text-xl font-['Mikro-Regular'] lg:text-[32px] xl:text-[46px] {navItem.link ===
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
