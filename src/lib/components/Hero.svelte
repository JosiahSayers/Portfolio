<script lang="ts">
	export let heroStyle: string = 'is-success';
	export let id: string = '';
	export let fullHeight = true;
	export let fadeOut = false;
</script>

<section class="hero {heroStyle}" class:is-fullheight={fullHeight} {id}>
	<div class="hero-body" class:fade-out={fadeOut}>
		<div class="container">
			<slot />
		</div>
	</div>
</section>

<style>
	.fade-out {
		background-image: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.2) 40%,
			rgba(255, 255, 255, 1) 100%
		);
	}
</style>
