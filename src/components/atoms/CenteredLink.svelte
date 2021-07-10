<script>
	export let href;
</script>

<div><a {href}><slot /></a></div>

<style>
	div {
		text-align: center;
		margin-bottom: 20px;
	}

	a {
		margin: 20px 0;
		position: relative;
	}

	a::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background: currentColor;
		top: 100%;
		left: 0;
		pointer-events: none;
		transform-origin: 100% 50%;
		transform: scale3d(0, 1, 1);
		transition: transform 0.2s;
	}

	a:hover::before {
		transform-origin: 0% 50%;
		transform: scale3d(1, 1, 1);
	}
</style>
