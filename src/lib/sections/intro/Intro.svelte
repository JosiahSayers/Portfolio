<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ChangingText from '$lib/components/intro/ChangingText.svelte';
	export let id: string;
	const changingTextEntries = [
		'Awesome Person',
		'Manager of Great Devs',
		'Tech Genius',
		'HR Specialist',
		'Gifted Developer',
		'Recruiting Extraordinaire'
	];
</script>

<div class="gradient">
	<Hero {id} heroStyle="is-medium has-bg-image cogs-background" fullHeight={false} fadeOut={true}>
		<div class="titles">
			<h1 class="title is-unselectable has-text-dark-grey">
				Hello, <ChangingText entries={changingTextEntries} />
			</h1>
			<h2 class="subtitle">I'm Josiah, and I'm a software developer. Let's get to know each other!</h2>
		</div>
	</Hero>
</div>

<style>
	.titles {
		width: fit-content;
		padding: 1.5rem 0;
		flex-shrink: 0;
	}
	@media only screen and (max-width: 500px) {
		h1 {
			min-height: 9rem;
			display: flex;
			flex-direction: column;
		}
	}
</style>
