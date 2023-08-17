<script lang="ts">
	export let handleChoice: () => void;
	export let page: string;
</script>

<a href={page}>
	<button
		class="w-[8.8125rem] text-black md:w-[9.5rem] lg:w-[10.5rem] xl:w-[11.5rem] 2xl:w-[12.75rem]"
		on:mouseenter={handleChoice}>выбрать всё</button
	></a
>
