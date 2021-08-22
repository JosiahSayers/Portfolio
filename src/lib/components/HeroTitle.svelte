<script lang="ts">
	import { onMount } from 'svelte';

	let rotation = 0;
	onMount(() =>
		window.addEventListener('scroll', (e) => {
			rotation = window.pageYOffset * -1;
		})
	);
</script>

<!-- <div class="accent" /> -->
<div class="is-flex is-align-items-center mb-5 hero-title">
	<img
		src="/pictures/cog.svg"
		alt="gear"
		class="mr-2"
		style={`transform: rotate(${rotation}deg)`}
	/>
	<h1 class="title has-text-weight-semi-bold">
		<slot />
	</h1>
</div>

<!-- <div class="accent" /> -->
<style>
	.title {
		font-size: 1.9rem;
	}
	img {
		height: 1.9rem;
	}
</style>
