<script>
	import Menu from './Menu.svelte';
	import MenuButton from '../atoms/MenuButton.svelte';

	export let header = { image: { url: '', height: '' } };
	export let menu = [{}];
    export let isHome = false;

	let src = header.image.url;
	let alt = 'Abell Design';
	let menuOpen = false;
	let onClick = () => (menuOpen = !menuOpen);
</script>

<div class="header-container-molecule">
	<header class:isHome id="article">
		<div>
			<a href={`${menu[0].slug}#article`}>
				<img {alt} {src} itemprop="logo" />
			</a>
		</div>

		<MenuButton {onClick} {menuOpen} isHome={isHome} />

		<Menu {menu} {menuOpen} />
	</header>
</div>
