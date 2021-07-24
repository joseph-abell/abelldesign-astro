<ul><slot /></ul>

<style>
	ul {
		margin-bottom: 40px;
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 40px;
		row-gap: 40px;
	}

	@media (min-width: 768px) {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
