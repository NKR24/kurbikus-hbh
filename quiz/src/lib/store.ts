import { writable } from 'svelte/store';
import type { ColorScheme } from '@svelteuidev/core';
import { browser } from '$app/environment';

let prefersDarkScheme;

if (browser) {
	prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
}
export const isDarkTheme = writable(prefersDarkScheme?.matches);

prefersDarkScheme?.addEventListener('change', (e) => {
	isDarkTheme.set(e.matches);
});

export const lightTheme: ColorScheme = 'light';
export const darkTheme: ColorScheme = 'dark';
