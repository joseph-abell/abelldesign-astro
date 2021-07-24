<script>
	import SpanAsLink from './SpanAsLink.svelte';

	export let next;
</script>

<div class="more-work">
	<a href={next.slug}>
		<div class="more-work-text">
			<h3>More Work:</h3>
			<p>{next.title}</p>
			<SpanAsLink width="120px">Read More ></SpanAsLink>
		</div>

		<div class="image-container">
			<img src={next.featuredImage.url} alt="" />
		</div>
	</a>
</div>

<style>
	.more-work {
		border-top: 1px solid black;
		border-bottom: 1px solid black;
		margin: 40px 0;
		padding: 40px 0;
		color: rgba(0, 0, 0, 0.8);
	}

	a {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 20px;
		color: rgba(0, 0, 0, 0.8);
	}

	.more-work-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.image-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
