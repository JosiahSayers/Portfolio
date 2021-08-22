<script lang="ts">
	import type { ProjectInterface } from '$lib/sections/projects/project.interface';
	import { technologyLinks } from '$lib/sections/projects/projects';
	import ProjectFeature from './ProjectFeature.svelte';
	import ProjectLinks from './ProjectLinks.svelte';
	import TechnologyLink from './TechnologyLink.svelte';
	export let project: ProjectInterface;
</script>

{#if project}
	<div class="py-7 px-4">
		<div class="container py-3">
			<h2 class="subtitle mb-1">{project.description}</h2>
			<ProjectLinks {project} />

			<div class="content">
				<ul>
					{#each project.features as feature}
						<li><ProjectFeature {feature} /></li>
					{/each}
				</ul>
			</div>

			{#each project.technologies as tech}
				<TechnologyLink technology={tech} link={technologyLinks[tech]} />
			{/each}
		</div>
	</div>
{/if}
