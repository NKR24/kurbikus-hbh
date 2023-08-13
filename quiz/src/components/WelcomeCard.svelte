<script>
	import { Badge, Button, Card, Group, Image, Text } from '@svelteuidev/core';
	import '../fonts.css';
	import PlayIcon from '../ui/svg-components/PlayIcon.svelte';
</script>

<div class="flex justify-center border-[0.5px] border-black">
	<Card padding={0} class="bg-[#dedede] sm:w-[24.25rem] lg:w-[108rem]">
		<Card.Section>
			<Image src="src/assets/images/welcomecardhouse.jpeg" alt="housepic" />
			<button
				class="bg-[#000] text-[#fff] sm: w-[14.46569rem] h-[3.25rem] text-[1rem] font-mikro"
				>Консултация</button
			>
		</Card.Section>

		<Group class="ml-[2.19rem]">
			<p class="sm: text-[3rem] font-bold lowercase font-mikro">БарнХаус</p>

			<div class="sm: w-[12.625rem] h-[6.875rem]">
				<p class="text-[1rem] lowercase sm:text-sm lg:text-[2rem] font-mikro">
					В котором можно жить даже на крайнем севере на монолитном фундаменте
					за 60 дней.
				</p>
			</div>
		</Group>

		<div class="border-t-[0.5px] border-black flex items-center sm: pt-[2.87rem] pb-[1.25rem] pl-[2.19rem] pr-[5.81rem]">
			<PlayIcon />
			<p
				class="text-[1rem] lowercase sm:text-sm lg:text-[2rem] pl-[2.19rem] font-mikro"
			>
				Посмотрите видео о строительстве вашего дома
			</p>
		</div>
	</Card>
</div>

<style>
	.font-mikro {
		font-family: mikro;
	}
</style>
