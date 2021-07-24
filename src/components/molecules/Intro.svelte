<script>
	import IntroText from '../atoms/IntroText.svelte';
	import A from '../atoms/A.svelte';
	import IntroImage from '../atoms/IntroImage.svelte';

	export let homepage;
</script>

<div class="intro-molecule">
	<IntroText>
		<h1>{homepage[0].title}</h1>
		<p>{homepage[0].subtitle} <A href="/contact">{homepage[0].contactLinkText}</A></p>
	</IntroText>

	<IntroImage>
		<img alt="" src={homepage[0].image.url} />
	</IntroImage>
</div>
