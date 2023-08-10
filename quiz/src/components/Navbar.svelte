<script>
	import { Flex, Text } from '@svelteuidev/core';
	import Logo from '../ui/svg-components/Logo.svelte';
	import BurgerIcon from './BurgerIcon.svelte';
</script>

<nav>
	<Flex justify="space-between" align="center">
		<div><Logo /></div>
		<div class="border border-black h-16" />
		<div class="flex-col pt-2 items-center w-40 h-16 text">
			<p>каркасные домапо</p>
			<p>технологии с 2010 года.</p>
			<p>Московская область.</p>
		</div>
		<BurgerIcon />
	</Flex>
</nav>

<style>
	.text {
		font-size: 0.5rem;
	}
</style>
