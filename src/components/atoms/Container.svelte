<article class:isHome data-barba="container">
	<slot />
</article>

<style>
	article {
		width: 80vw;
		margin: 0 auto;
		padding-top: 90px;
	}

    article.isHome {
        padding-top: 20px;
    }

	@media (min-width: 768px) {
		article {
			padding-top: 20px;
		}
	}
	@media (min-width: 1200px) {
		article {
			width: 1024px;
		}
	}
</style>

<script>
    export let isHome = false;
</script>