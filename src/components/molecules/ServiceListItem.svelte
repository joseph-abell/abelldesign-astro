<script>
	import H3 from '../atoms/H3.svelte';
	import P from '../atoms/P.svelte';
	import A from '../atoms/A.svelte';
	export let item;
</script>

<li>
	<div class="data-item-text">
		<H3>{item.title}</H3>
		<P>{item.featuredDeck}</P>
		<P><A href={`/work/${item.work.slug}`}>{item.featuredLinkText}</A></P>
	</div>

	{#if item.featuredImage.url}
		<div>
			<div style="display: flex; align-items: center; justify-content: center;">
				<img alt="" src={item.featuredImage.url} />
			</div>
		</div>
	{/if}
</li>

<style>
	@media (min-width: 768px) {
		.data-item-text {
			flex-grow: 1;
		}
	}
</style>
