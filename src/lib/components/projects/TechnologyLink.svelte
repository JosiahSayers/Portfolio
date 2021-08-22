<script lang="ts">
	export let technology: string;
	export let link: string;
</script>

<span class="tag is-normal has-background-info-light m-2">
	{#if link}
		<a href={link} class="has-text-black" target="_blank" rel="noopener">{technology}</a>
	{:else}
		{technology}
	{/if}
</span>
