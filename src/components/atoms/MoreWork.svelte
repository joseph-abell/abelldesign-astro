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
