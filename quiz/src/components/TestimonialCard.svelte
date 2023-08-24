<script>
	import '../fonts.css';
	export let date;
	export let fullName;
	export let comment;
</script>

<div class="text-montserrat flex justify-center py-5  border-b-[1px] border-[#DEDEDE] text-[0.875rem]">
	<div class="flex flex-col gap-y-4 w-[90%]">
	    <h3 class="font-bold">{date}</h3>
    	<p>{fullName}</p>
    	<p>{comment}</p>
	</div>
</div>

<style>
	.text-montserrat {
		font-family: montserrat;
	}
</style>
