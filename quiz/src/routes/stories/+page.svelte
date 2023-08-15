<script lang="ts">
	import '../../global.css';
	import { Flex } from '@svelteuidev/core';

	import oneStory from '$lib/assets/images-stories/one-story.png';
	export let stories: string | null = '';

	function handleStory(event: MouseEvent) {
		stories = (event.target as HTMLButtonElement)?.textContent;
	}

	function handleChoose() {
		if (stories) {
			console.log(stories);
		}
	}
</script>

<Flex direction="column">
	<h2>Этажность?</h2>
	<img src={oneStory} alt="one story house" />
	<button on:click={handleStory}>1</button>
	<button on:click={handleStory}>2</button>
	<button on:click={handleChoose}>choose</button>
</Flex>
