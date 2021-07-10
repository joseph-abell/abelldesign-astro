<script>
	export let href;
	export let color = '#B40808';
	export let display = 'inline-block';
	export let padding = '0';
</script>

<a {href} style="--color: {color}; --display: {display}; --padding: {padding}"><slot /></a>

<style>
	a {
		color: var(--color);
		text-decoration: none;
		display: var(--display);
		padding: var(--padding);
		position: relative;
	}

	@media (min-width: 768px) {
		a {
			padding: 0;
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
	}
</style>
