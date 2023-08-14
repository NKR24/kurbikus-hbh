<script>
	import '../fonts.css';
	import DownloadPdf from '../ui/svg-components/DownloadPdf.svelte';
	export let square;
	export let bedrooms;
	export let price;
	export let image;
	export let index;
</script>

<div class="border-[0.5px] border-[#DEDEDE] text mb-[1.81rem] pb-4">
	<div class="relative">
		<img src={image} class="sm: w-full h-[15.625rem]" alt="imageh1" />
		<p
			class="text-[6rem] font-bold text-[#3e3e3e] absolute top-[-1rem] left-[2.81rem]"
		>
			h{index}
		</p>
		<div class="absolute top-4 right-[3.86rem]">
			<a href="#"><DownloadPdf /></a>
		</div>
	</div>

	<div
		class="sm: w-[13.9375rem] h-[3.375rem] mt-3 ml-8 text-[0.9375rem] lowercase mb-2"
	>
		<p>{square}</p>
		<p>{bedrooms}</p>
		<p>{price}</p>
	</div>
</div>

<style>
	.text {
		font-family: mikro;
	}
</style>
