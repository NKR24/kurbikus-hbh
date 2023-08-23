<script lang="ts">
	export let handleAll: () => void;
	export let page: string;
</script>

<a href={page}>
	<button
		class="w-[8rem] px-1 py-1 text-black md:w-[11.5rem] lg:w-[12rem] xl:w-[12.5rem] 2xl:w-[13rem]"
		on:click={handleAll}
		on:mouseenter={handleAll}>выбрать всё</button
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
