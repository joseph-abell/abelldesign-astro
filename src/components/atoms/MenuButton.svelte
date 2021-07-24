<script>
	export let onClick;
	export let menuOpen;
    export let isHome = false;
</script>

<button on:click={onClick} class:menuOpen class:isHome class="menu-button-component">+</button>
