<script>
	import '../fonts.css';
    export let square;
    export let bedrooms;
    export let price;
    export let image;
</script>

<div class="border-[0.5px] border-[#DEDEDE] text mb-[1.81rem] pb-4">
	<div>
		<img
			src={image}
			class="sm: w-full h-[15.625rem]"
			alt="imageh1"
		/>
	</div>

	<div class="sm: w-[13.9375rem] h-[3.375rem] mt-3 ml-8 text-[0.9375rem] lowercase mb-2">
		<p >{square}</p>
		<p >{bedrooms}</p>
		<p >{price}</p>
	</div>
</div>


<style>
	.text {
		font-family: mikro;
	}
</style>
