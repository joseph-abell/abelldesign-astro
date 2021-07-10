<script>
	export let onClick;
	export let menuOpen;
</script>

<button on:click={onClick} class:menuOpen>+</button>

<style>
	button {
		background: none;
		border: 0;
		position: fixed;
		right: 10vw;
		height: 72px;
		width: 72px;
		line-height: 72px;
		font-size: 72px;
		font-weight: bold;
		margin: 0;
		padding: 0;
		z-index: 2;
		top: 0;
		margin-right: -24px;
		transition: transform 0.2s ease-in-out;
	}

	button.menuOpen {
		transform: rotate(45deg);
	}

	@media (min-width: 768px) {
		button {
			display: none;
		}
	}
</style>
