<script>
	import FooterA from '../atoms/FooterA.svelte';

	export let image = '';
	export let text = '';
	export let link = '';
	export let alt = '';
</script>

<li>
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

<style>
	li {
		padding: 10px 0;
		list-style: none;
	}
	a,
	.flex {
		color: white;
		display: flex;
		flex-flow: start;
		align-items: center;
		text-decoration: none;
	}
	.imageContainer {
		width: 24px;
		margin-right: 20px;
	}
</style>
