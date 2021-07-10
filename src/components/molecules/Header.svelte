<script>
	import Menu from './Menu.svelte';
	import MenuButton from '../atoms/MenuButton.svelte';

	export let header = { image: { url: '', height: '' } };
	export let menu = [{}];

	let src = header.image.url;
	let alt = 'Abell Design';
	let menuOpen = false;
	let onClick = () => (menuOpen = !menuOpen);
</script>

<div class="header-container">
	<header>
		<div>
			<a href={`${menu[0].slug}`}>
				<img {alt} {src} />
			</a>
		</div>

		<MenuButton {onClick} {menuOpen} />

		<Menu {menu} {menuOpen} />
	</header>
</div>

<style>
	.header-container {
		position: relative;
		background: #ffffee;
	}
	header {
		position: fixed;
		background: #ffffee;
		left: 0;
		width: 100vw;
		z-index: 2;
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
			position: static;
			width: auto;
			display: flex;
			align-items: center;
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
