<Header/>
<main>
	<div class="contents">
		<Router {routes}/>
	</div>
</main>

<script lang="typescript">
	import Header from "./components/Header.svelte";

	import Router from 'svelte-spa-router'
	import routes from './routes'
</script>

<style lang="scss">
	main {
		text-align: center;
		max-width: 240px;

		.contents {
			padding: var(--top-offset) 0;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
