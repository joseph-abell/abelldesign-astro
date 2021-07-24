<script>
	import H2 from '../atoms/H2.svelte';
	import ContentList from '../atoms/ContentList.svelte';
	import ContentListItem from '../atoms/ContentListItem.svelte';
	import SpanAsLink from '../atoms/SpanAsLink.svelte';
	import P from '../atoms/P.svelte';
	import CenteredLink from '../atoms/CenteredLink.svelte';

	export let works;
</script>

<div class="work-molecule">
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
