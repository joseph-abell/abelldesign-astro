<script>
	import FooterA from '../atoms/FooterA.svelte';

	export let image = '';
	export let text = '';
	export let link = '';
	export let alt = '';
</script>

<li class="social-media-item-molecule">
	{#if !!link}
		<a href={link}>
			<div class="imageContainer">
				<img src={image} {alt} />
			</div>

			<FooterA>{text}</FooterA>
		</a>
	{:else}
		<div class="flex">
			<div class="imageContainer">
				<div style="display: flex;">
					<img src={image} {alt} />
				</div>
			</div>

			<div>{text}</div>
		</div>
	{/if}
</li>
