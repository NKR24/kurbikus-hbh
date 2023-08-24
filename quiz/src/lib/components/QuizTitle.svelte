<script lang="ts">
	export let content: string;
</script>

<h1
	class="text-black text-5xl xl:text-[5rem] 2xl:text-[6.875rem] font-bold font-['Mikro-Bold'] lowercase"
>
	{content}
</h1>

<style>
	@media only screen and (min-height: 1000px) {
		h1 {
			font-size: 6rem;
		}
	}
	@media only screen and (min-height: 1366px) {
		h1 {
			font-size: 7rem;
		}
	}

	@media only screen and (min-height: 1733px) {
		h1 {
			font-size: 10rem;
		}
	}
</style>
