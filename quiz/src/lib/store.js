import { writable } from 'svelte/store';
import { browser } from '$app/environment';
let prefersDarkScheme;
if (browser) {
    prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
}
export const isDarkTheme = writable(prefersDarkScheme?.matches);
prefersDarkScheme?.addEventListener('change', (e) => {
    isDarkTheme.set(e.matches);
});
export const lightTheme = 'light';
export const darkTheme = 'dark';
//# sourceMappingURL=store.js.map