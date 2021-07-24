<script>
	import SpanAsLink from '../atoms/SpanAsLink.svelte';
	export let item;
	export let slugPrefix;
</script>

<li itemscope itemtype="https://schema.org/Service" class="service-item-molecule">
	<a
		class={item.oddEven === 0 ? 'data-item-link row' : 'data-item-link row-reverse'}
		href={`${slugPrefix}/${item.work.slug}`}
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
					<img alt="" src={item.featuredImage.url} itemtype="image" />
				</div>
			</div>
		{/if}
	</a>
</li>
