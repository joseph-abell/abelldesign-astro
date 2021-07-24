<script>
	import { onMount } from 'svelte';

	export let src = '';
	export let alt = '';
	export let margin = '0';
	export let height = 'auto';

	let loaded = false;
	let thisImage;
	let heightPx = height;

	if (!height.toString().includes('%') && height !== 'auto') {
		heightPx = `${height}px`;
	}

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
		thisImage.src = src;
		thisImage.alt = alt;
	});
</script>

<img class:loaded bind:this={thisImage} {src} {alt} style="--margin:{margin}" />

<style>
	img {
		opacity: 0;
		transition: opacity 300ms ease-out, height 300px ease-out;
		margin: var(--margin);
	}

	img.loaded {
		opacity: 1;
	}
</style>
