<script>
	export let src = '';
	export let alt = '';
</script>

<div><img {src} {alt} /></div>

<style>
	div {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 72px;
	}
	img {
		margin: 0 auto;
        width: 72px;
	}
	@media (min-width: 768px) {
		img {
			height: auto;
		}
	}
</style>
