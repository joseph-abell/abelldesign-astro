<script>
	export let width = 'auto';
</script>

<span style={`--width: ${width}`}><slot /></span>

<style>
	span {
		color: #b40808;
		text-decoration: none;
		display: inline-block;
		position: relative;
		width: var(--width);
	}

	span::before {
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

	span:hover::before {
		transform-origin: 0% 50%;
		transform: scale3d(1, 1, 1);
	}
</style>
