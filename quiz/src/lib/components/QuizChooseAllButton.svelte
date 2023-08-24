<script lang="ts">
	export let handleChoice: () => void;
	export let page: string;
</script>

<a href={page}>
	<button
		class="w-[8.8125rem] text-black md:w-[9.5rem] lg:w-[10.5rem] xl:w-[11.5rem] 2xl:w-[12.75rem] font-['Mikro-Regular']"
		on:mouseenter={handleChoice}>выбрать всё</button
	></a
>

<style>
	@media only screen and (min-height: 600px) {
		:global(button) {
			font-size: 25px;
			height: 3rem;
		}
	}

	@media only screen and (min-height: 1000px) {
		:global(button) {
			padding: 0 20px;
			font-size: 50px;
			height: 5rem;
		}
	}

	@media only screen and (min-height: 1366px) {
		:global(button) {
			font-size: 70px;
			height: 7rem;
		}
	}

	@media only screen and (min-height: 1500px) {
		:global(button) {
			padding: 5px 30px 10px;
			font-size: 70px;
			height: 7rem;
		}
	}

	@media only screen and (min-height: 1733px) {
		:global(button) {
			padding: 5px 30px 30px;
			font-size: 90px;
			height: 9rem;
		}
	}
</style>
