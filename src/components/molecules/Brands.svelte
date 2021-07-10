<script>
	import H2 from '../atoms/H2.svelte';
	export let brands;
	export let brandsText;
</script>

<div>
	<H2>{brandsText}</H2>

	<ul class="brand-list">
		{#each brands as brand (brand.id)}
			<li>
				<div style="display: flex; align-items: center; justify-content: center;">
					<img alt="" src={brand.image.url} style="margin: 0 auto 20px" />
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.brand-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		justify-items: stretch;
		align-items: stretch;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 40px;
		row-gap: 40px;
		margin-bottom: 30px;
	}
</style>
