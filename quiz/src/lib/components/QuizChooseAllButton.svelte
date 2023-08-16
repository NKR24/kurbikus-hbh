<script lang="ts">
	export let handleAll: () => void;
	export let page: string;
</script>

<a href={page}>
	<button
		class="w-[8.8125rem] text-black md:w-[9.5rem] lg:w-[10.5rem] xl:w-[11.5rem] 2xl:w-[12.75rem]"
		on:click={handleAll}
		on:mouseenter={handleAll}>выбрать всё</button
	></a
>
