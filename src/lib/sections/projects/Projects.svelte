<script lang="ts">
	import Project from '$lib/components/projects/Project.svelte';
	import Tabs from '$lib/components/projects/Tabs.svelte';
	import Section from '$lib/components/Section.svelte';
	import { projects } from './projects';
	export let id: string;
	let activeIndex = 0;
</script>

<Section {id} title="Projects">
	<Tabs bind:activeIndex {projects} />
	<Project project={projects[activeIndex]} />
</Section>
