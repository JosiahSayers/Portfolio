<script lang="ts">
	import type { ProjectFeature } from '$lib/sections/projects/project.interface';
	export let feature: string | ProjectFeature;
	const linkRegex = /<link>(?<text>.*)<\/link>/;
</script>

{#if typeof feature === 'string'}
	{feature}
{:else}
	{feature.text.split('<link>')[0]}
	<a href={feature.url} target="_blank">
		{linkRegex.exec(feature.text).groups?.text}
	</a>
	{feature.text.split('</link>')[1]}
{/if}
