<script>
	export let width = 'auto';
	export let menuOpen;
	export let slug;

	function handleButtonClick() {
		menuOpen = false;
		window.location = slug.length > 1 ? `/${slug}` : slug;
	}
</script>

<button style={`--width: ${width}`} on:click={handleButtonClick} class="buttonAsLink"><slot /></button>
