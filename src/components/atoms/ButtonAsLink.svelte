<script>
	export let width = 'auto';
	export let menuOpen;
	export let slug;

	function handleButtonClick() {
		menuOpen = false;
		window.location = slug.length > 1 ? `/${slug}` : slug;
	}
</script>

<button style={`--width: ${width}`} on:click={handleButtonClick}><slot /></button>

<style>
	button {
		color: rgba(0, 0, 0, 0.8);
		background: none;
		border: 0;
		padding: 0;
		margin: 0;
		text-decoration: none;
		display: inline-block;
		position: relative;
		width: var(--width);
		cursor: pointer;
	}
</style>
