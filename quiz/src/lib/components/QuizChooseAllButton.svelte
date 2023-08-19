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
