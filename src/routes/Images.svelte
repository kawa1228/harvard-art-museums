<h1>Image Gallery</h1>

<div class="images">
	{#each images as image}
		<ImageCard src={image.baseimageurl} alt={image.copyright} figcaption={image.copyright}/>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>

<script lang="typescript">
	import { onMount } from 'svelte';
	import ImageCard from '../components/ImageCard.svelte'

	let images = [];

	onMount(async () => {
		const baseUrl = process.env.BASE_URL;
		const apiKey = process.env.API_KEY;

		const res = await fetch(`${baseUrl}/image?apikey=${apiKey}&sort=random`).catch((error) => {
			throw new Error(error);
		});
		const body = await res.json();
		images = body.records;
	});
</script>

<style lang="scss">
h1 {
	margin-bottom: 2em;
    font-size: 2em;
}
.images {
    display: grid;
	grid-column-gap: 1em;
    grid-row-gap: 5em;
    grid-template-columns: repeat(2, 1fr);
}
</style>
