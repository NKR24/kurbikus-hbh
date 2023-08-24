<script>
	import '../app.postcss';
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { darkTheme, isDarkTheme, lightTheme } from '$lib/store';

	let themeObserver = lightTheme;

	// isDarkTheme.subscribe((value) => {
	//   themeObserver = value ? darkTheme : lightTheme;
	// });
</script>

<SvelteUIProvider {themeObserver} withGlobalStyles>
	<slot />
</SvelteUIProvider>
