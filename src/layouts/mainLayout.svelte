<script>
    import Header from '../components/molecules/Header.svelte';
    import Footer from '../components/molecules/Footer.svelte';
    import WhiteBackground from '../components/atoms/WhiteBackground.svelte';
    import ScreenTransition from '../components/atoms/ScreenTransition.svelte';
    import CTA from '../components/atoms/CTA.svelte';

    export let title, menu, header, footer, isHome, homepage;
    menu = (menu || []).sort((a, b) => a.order - b.order);
</script>

<style>
    .hidden {
        position: absolute;
        left: -100vw;
    }
</style>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="/style/global.css">
</head>
<body itemscope itemtype="https://schema.org/LocalBusiness">
    <p class="hidden" itemprop="name">Abell Design</p>
    <WhiteBackground>
        <div class="header-container">
            {#if homepage}
                <CTA title={homepage.title} subtitle={homepage.subtitle} slot="cta" />
            {/if}
            <Header {header} {menu} isHome={isHome} />
        </div>

        <slot />
    </WhiteBackground>

    <Footer footer={footer} />
    <ScreenTransition />
</body>
</html>
