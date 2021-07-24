<script>
	import SpanAsLink from '../atoms/SpanAsLink.svelte';
	export let item;
	export let slugPrefix;
</script>

<li itemscope itemtype="https://schema.org/CreativeWork" class="list-item-molecule">
	<a
		class={item.oddEven === 0 ? 'data-item-link row' : 'data-item-link row-reverse'}
		href={`${slugPrefix}/${item.slug}`}
		style="--flexDirection: {item.oddEven === 0 ? 'row' : 'row-reverse'}"
        itemprop="url"
	>
		<div class="data-item-text">
			<h3 itemprop="name">{item.title}</h3>
			<p itemprop="description">{item.featuredDeck} <SpanAsLink>{item.featuredLinkText}</SpanAsLink></p>
		</div>

		{#if item.featuredImage.url}
			<div>
				<div style="display: flex; align-items: center; justify-content: center;">
					<img alt="" src={item.featuredImage.url} itemprop="image" />
				</div>
			</div>
		{/if}
	</a>
</li>
