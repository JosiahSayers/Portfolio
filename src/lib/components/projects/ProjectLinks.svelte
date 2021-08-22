<script lang="ts">
	import { LOGGER } from '$lib/logging/sidelog';
	import type { ProjectInterface } from '$lib/sections/projects/project.interface';
	export let project: ProjectInterface;

	function logClick(linkType: 'Live' | 'Code') {
		LOGGER.info('Project link clicked', {
			projectName: project.name,
			linkType,
			url: linkType === 'Live' ? project.url : project.sourcecodeUrl
		});
	}
</script>

<span class="is-size-7">
	{#if project.url}
		<a href={project.url} target="_blank" rel="noopener" on:click={() => logClick('Live')}> View Live </a>
	{/if}

	{#if project.url && project.sourcecodeUrl}
		<span class="mx-1">-</span>
	{/if}

	{#if project.sourcecodeUrl}
		<a href={project.sourcecodeUrl} target="_blank" rel="noopener" on:click={() => logClick('Code')}>
			View Code
		</a>
	{/if}
</span>
