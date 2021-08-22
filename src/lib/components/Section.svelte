<script lang="ts">
	import HeroTitle from './HeroTitle.svelte';
	export let id: string;
	export let title: string;
</script>

<div class="section" {id}>
	<div class="container">
		<HeroTitle>{title}</HeroTitle>
		<slot />
	</div>
</div>
