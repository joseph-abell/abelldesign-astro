<script>
	export let onClick;
	export let menuOpen;
	console.log('MenuButton menuOpen', menuOpen);
    export let isHome = false;
</script>

<button on:click={onClick} class:menuOpen class:isHome>+</button>

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
		z-index: 3;
		top: 0;
		margin-right: -24px;
		transition: transform 0.2s ease-in-out;
        color: #16688c;
	}

	button.menuOpen {
		transform: rotate(45deg);
        text-shadow: none;
	}

    button.isHome {
        transition: transform 0.2s ease-in-out, color 0.2s ease-in-out text-shadow 0.2s ease-in-out;
    }

    button.isHome.menuOpen {
        position: fixed;
    }

	@media (min-width: 768px) {
		button {
			display: none;
		}
	}
</style>
