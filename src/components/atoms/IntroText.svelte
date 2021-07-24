<div>
	<slot />
</div>

<style>
	@media (min-width: 768px) {
		div {
			width: calc(100% - 500px);
			float: left;
			margin-right: 20px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 346px;
		}
	}
</style>
