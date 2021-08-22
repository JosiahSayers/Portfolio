<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	export let entries: string[] = [];

	let currentText = '';
	const waitTimeBetweenStroke = 55;
	let intervalRef: any;
	let reverseDirection = false;
	let currentEntryIndex = 0;

	function updateText() {
		const currentIndex = currentText.length;
		const currentEntry = entries[currentEntryIndex];
		const shouldMoveToNextString = reverseDirection && currentIndex === 0;
		const shouldAddNextCharacter = currentIndex < currentEntry.length && !reverseDirection;
		const shouldReverseDirection = currentIndex === currentEntry.length && !reverseDirection;
		const shouldRemoveNextCharacter = currentIndex > 0;

		if (shouldMoveToNextString) {
			currentEntryIndex = entries[currentEntryIndex + 1] ? currentEntryIndex + 1 : 0;
			reverseDirection = false;
		} else if (shouldAddNextCharacter) {
			currentText = currentEntry.substr(0, currentIndex + 1);
		} else if (shouldReverseDirection) {
			clearInterval(intervalRef);
			const timeoutRef = setTimeout(() => {
				intervalRef = setInterval(updateText, waitTimeBetweenStroke);
				clearTimeout(timeoutRef);
				reverseDirection = true;
			}, waitTimeBetweenStroke * 25);
		} else if (shouldRemoveNextCharacter) {
			currentText = currentEntry.substr(0, currentIndex - 1);
		}
	}

	onMount(() => (intervalRef = setInterval(updateText, waitTimeBetweenStroke)));

	onDestroy(() => clearInterval(intervalRef));
</script>

<span>
	{currentText}<span class="blinking-cursor">|</span>
</span>

<style>
	.blinking-cursor {
		animation: blinker 0.5s cubic-bezier(0.1, 0, 0.4, 0.4) infinite alternate;
	}
	@keyframes blinker {
		to {
			opacity: 0;
		}
	}
</style>
