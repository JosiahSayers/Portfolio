<script lang="ts">
	import type { Readable } from 'svelte/store';
	export let formSubmitted: boolean;
	export let inputLabel: string;
	export let placeholder = inputLabel;
	export let id: string;
	export let isValid: (val: string) => boolean;
	export let errorMessage: string;
	export let updateValue: (newVal: string) => void;
	export let valueChanges: Readable<string>;
	let value = '';
	valueChanges.subscribe((val) => (value = val));
</script>

<div class="field">
	<label class="label" for={id}>{inputLabel}</label>
	<div class="control">
		<textarea
			class="textarea"
			class:is-danger={formSubmitted && !isValid(value)}
			class:is-success={isValid(value)}
			{placeholder}
			{id}
			bind:value
			on:keyup={() => updateValue(value)}
		/>
	</div>
	{#if formSubmitted && !isValid(value)}
		<p class="help is-danger">{errorMessage}</p>
	{/if}
</div>
