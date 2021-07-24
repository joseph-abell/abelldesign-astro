<script>
	export let href;
	export let color = '#B40808';
	export let display = 'inline-block';
	export let padding = '0';
</script>

<a {href} style="--color: {color}; --display: {display}; --padding: {padding}" class="A"><slot /></a>
