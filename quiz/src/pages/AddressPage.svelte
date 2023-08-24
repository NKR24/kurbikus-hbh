<script>
	import '../fonts.css';
	import Logo from '../ui/svg-components/Logo.svelte';
	import SocialNetworks from '../ui/svg-components/SocialNetworks.svelte';
</script>

<div class="bg-[#DEDEDE] font-mikro pb-8">
	<img
		src="src/assets/images/map-img.png"
		class="h-[13.5625rem]"
		alt="mapimg"
	/>
	<div class="flex w-[95%] mx-auto mt-2 border-[0.5px] border-black">
		<div
			class="flex justify-center items-center border-r-[1px] border-black w-[5.31rem]"
		>
			<Logo />
		</div>
		<div class="flex justify-center items-center w-[7.75rem]">
			<SocialNetworks />
		</div>
		<div
			class="flex flex-col justify-center items-center border-l-[1px] border-black h-[100%] w-[12.69rem]"
		>
			<p class="text-[1.375rem]">8 985 472 35 09</p>
			<p class="text-[0.4375rem]">МКАД, 69-й километр, внешняя сторона, к19</p>
		</div>
	</div>
	<div class="flex justify-between w-[90%] mx-auto mt-4">
		<p>HBH.ru©2022</p>
		<p>M</p>
	</div>
</div>

<style>
	.font-mikro {
		font-family: mikro;
	}
</style>
