<script>
	import { Flex, Text } from '@svelteuidev/core';
	import Logo from '../ui/svg-components/Logo.svelte';
	import BurgerIcon from './BurgerIcon.svelte';
	import '../fonts.css';
</script>

<nav>
	<Flex align="center" justify="space-between">
		<div class="flex items-center justify-center sm: gap-4">
			<div><Logo /></div>
			<div class="border border-black border-r-0 h-16" />
			<div class="flex items-center sm: w-36 h-8">
				<p class="sm: text-[0.5rem] text">
					каркасные домапо финской технологии с 2010 года. Московская область.
				</p>
			</div>
		</div>
		<BurgerIcon />
	</Flex>
</nav>
<style>
	.text{
		font-family: mikro;
	}
</style>