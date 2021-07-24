<script>
	import H2 from '../atoms/H2.svelte';
	export let brands;
	export let brandsText;
</script>

<div>
	<H2>{brandsText}</H2>

	<ul class="brand-list">
		{#each brands as brand (brand.id)}
			<li itemscope itemtype="https://schema.org/Organization">
				<div style="display: flex; align-items: center; justify-content: center;">
					<img alt="" src={brand.image.url} style="margin: 0 auto 20px" itemtype="logo" />
				</div>
			</li>
		{/each}
	</ul>
</div>