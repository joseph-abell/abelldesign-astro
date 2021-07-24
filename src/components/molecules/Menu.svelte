<script>
	export let menu;
	export let menuOpen;
</script>

<menu class:menuOpen class="menu-molecule">
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
