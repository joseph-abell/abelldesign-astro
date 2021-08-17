<script>
	import Menu from './Menu.svelte';
	import MenuButton from '../atoms/MenuButton.svelte';

	export let header = { image: { url: '', height: '' } };
	export let menu = [{}];
    export let isHome = false;

	let src = header.image.url;
	let alt = 'Abell Design';
	let menuOpen = false;
	console.log(menuOpen);
	let onClick = () => (menuOpen = !menuOpen);
</script>

<div class="header-container">
	<header class:isHome id="article">
		<div>
			<a href={`${menu?.[0]?.slug}#article`}>
				<img {alt} {src} itemprop="logo" />
			</a>
		</div>

		<MenuButton {onClick} {menuOpen} isHome={isHome} />

		<Menu {menu} {menuOpen} />
	</header>
</div>

<style>
	.header-container {
		position: relative;
        top: 0;
		background: #ffffee;
        z-index: 2;
	}
	header {
		position: fixed;
		background: #ffffee;
		left: 0;
		width: 100vw;
		z-index: 2;
	}
    header.isHome {
        position: fixed;
        top: 0;
    }

	header div {
		margin: 0 auto;
		padding-top: 20px;
		padding-bottom: 20px;
		width: 104px;
	}

	@media (min-width: 768px) {
		.header-container {
			margin: 0 auto;
			width: 80vw;
		}
		header {
			width: auto;
			display: flex;
			align-items: center;
            position: static;
		}

        header.isHome {
            position: static;
        }

		header div {
			margin: 0;
			float: left;
		}
	}

	@media (min-width: 1200px) {
		.header-container {
			width: 1024px;
		}
	}
</style>
