<script>
	export let menu;
	export let menuOpen;
</script>

<menu class:menuOpen>
	<ul>
		{#each menu as menuItem (menuItem.slug)}
			<li>
				<a href={`${menuItem.slug.length > 1 ? `/${menuItem.slug}` : `${menuItem.slug}#article`}`}>
					{menuItem.text}
                </a>
			</li>
		{/each}
	</ul>
</menu>

<style>
	menu {
		position: fixed;
		z-index: 1;
		left: 100vw;
		width: 100vw;
		top: 0px;
		height: 100vh;
		transition: left 0.3s ease-in-out;
		background: #ffffee;
		overflow-y: auto;
        padding-top: 40px;
	}

	menu.menuOpen {
		left: 0;
	}

	ul {
		border-top: 1px dashed black;
		width: 50vw;
	}

	li {
		display: block;
		border-bottom: 1px dashed black;
        padding: 10px 0;
	}

	@media (min-width: 768px) {
		menu {
			position: static;
			top: initial;
			left: initial;
			width: calc(80vw - 104px);
			height: initial;
			float: left;
			padding-left: 50px;
			padding-top: 0;
			overflow: hidden;
		}

		ul {
			border-top: 0;
			width: auto;
			display: flex;
			justify-content: space-between;
		}

		li {
			border-bottom: 0;
            padding: 0;
		}
	}

	@media (min-width: 1024px) {
		menu {
			width: 550px;
		}
	}
</style>
