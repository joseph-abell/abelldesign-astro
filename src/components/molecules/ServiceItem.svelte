<script>
	import SpanAsLink from '../atoms/SpanAsLink.svelte';
	export let item;
	export let slugPrefix;
</script>

{#if item.work}
	<li itemscope itemtype="https://schema.org/Service">
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
{/if}

<style>
	.data-item-link {
		color: #b40808;
		text-decoration: none;
		display: inline-block;
		padding: 0;
		position: relative;
		margin-bottom: 40px;
	}

	h3 {
		font-size: 18px;
		line-height: 22px;
		color: #16688c;
		padding: 0 0 20px;
	}

	p {
		color: rgba(0, 0, 0, 0.9);
        margin-bottom: 20px;
	}

	@media (min-width: 1000px) {
		.data-item-link {
			padding: 0;
			display: flex;
			justify-content: space-between;
			flex-direction: var(--flexDirection);
			align-content: stretch;
			align-items: stretch;
		}

		.data-item-text {
			flex-grow: 1;
			width: calc(100% - 500px);
			display: flex;
			flex-direction: column;
			height: 343px;
			justify-content: center;
		}

		.row .data-item-text {
			margin-right: 40px;
		}

		.row-reverse .data-item-text {
			margin-left: 40px;
		}
	}
</style>
