<script>
	import IntroText from '../atoms/IntroText.svelte';
	import A from '../atoms/A.svelte';
	import IntroImage from '../atoms/IntroImage.svelte';

	export let homepage;
</script>

<div>
	<IntroText>
		<h1>{homepage[0].title}</h1>
		<p>{homepage[0].subtitle} <A href="/contact">{homepage[0].contactLinkText}</A></p>
	</IntroText>

	<IntroImage>
		<img alt="" src={homepage[0].image.url} />
	</IntroImage>
</div>

<style>
	div {
		margin-bottom: 40px;
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 36px;
			line-height: 50px;
			margin-bottom: 15px;
		}

		p {
			font-size: 18px;
			line-height: 30px;
		}
		div {
			display: flex;
		}
		div::after {
			clear: both;
			content: ' ';
			display: block;
		}
	}
</style>
