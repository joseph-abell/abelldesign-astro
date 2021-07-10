<script>
	import H2 from '../atoms/H2.svelte';
	import ContentList from '../atoms/ContentList.svelte';
	import ContentListItem from '../atoms/ContentListItem.svelte';
	import SpanAsLink from '../atoms/SpanAsLink.svelte';
	import P from '../atoms/P.svelte';
	import CenteredLink from '../atoms/CenteredLink.svelte';

	export let works;
</script>

<div>
	<H2>Work</H2>

	<ContentList>
		{#each works as work (work.id)}
			<ContentListItem>
				<a class="work-link" href={`/${work.slug}`} class:even={work.oddEven === 1}>
					<div class="work-text" class:even={work.oddEven === 0}>
						<P>{work.featuredDeck} <SpanAsLink>{work.featuredLinkText}</SpanAsLink></P>
					</div>

					<div class="work-image">
						<img alt="" src={work.featuredImage.url} />
					</div>
				</a>
			</ContentListItem>
		{/each}
	</ContentList>

	<CenteredLink href="/work">More Work</CenteredLink>
</div>

<style>
	.work-link {
		display: flex;
		justify-content: stretch;
		align-content: stretch;
		margin-bottom: 20px;
	}

	.work-link.even {
		flex-direction: row-reverse;
	}

	.work-text {
		width: calc(100% - 170px);
		margin-right: 20px;
		margin-left: 0;
		height: 150px;
	}

	.work-text.even {
		margin-left: 20px;
		margin-right: 0;
		width: calc(100% - 170px);
	}
</style>
