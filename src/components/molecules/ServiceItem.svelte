<script>
	import SpanAsLink from '../atoms/SpanAsLink.svelte';
	export let item;
	export let slugPrefix;
</script>

<li>
	<a
		class={item.oddEven === 0 ? 'data-item-link row' : 'data-item-link row-reverse'}
		href={`${slugPrefix}/${item.work.slug}`}
		style="--flexDirection: {item.oddEven === 0 ? 'row' : 'row-reverse'}"
	>
		<div class="data-item-text">
			<h3>{item.title}</h3>
			<p>{item.featuredDeck} <SpanAsLink>{item.featuredLinkText}</SpanAsLink></p>
		</div>

		{#if item.featuredImage.url}
			<div>
				<div style="display: flex; align-items: center; justify-content: center;">
					<img alt="" src={item.featuredImage.url} />
				</div>
			</div>
		{/if}
	</a>
</li>

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
	}

	@media (min-width: 768px) {
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
