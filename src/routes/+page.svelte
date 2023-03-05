<script lang="ts">
	import ContactMe from '$lib/sections/contact-me/ContactMe.svelte';
	import Intro from '$lib/sections/intro/Intro.svelte';
	import Projects from '$lib/sections/projects/Projects.svelte';
	import Skills from '$lib/sections/skills/Skills.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Modal from '$lib/components/modal/Modal.svelte';
	import { LOGGER } from '$lib/logging/sidelog';
	import { onMount } from 'svelte';

	const introNavItem = { text: 'Hello', id: 'intro', active: true };
	const projectsNavItem = { text: 'My Work', id: 'projects', active: false };
	const skillsNavItem = { text: 'My Skills', id: 'skills', active: false };
	const contactMeNavItem = {
		text: 'Contact',
		id: 'contact-me',
		active: false
	};

	onMount(() => LOGGER.info('Page Loaded'));
</script>

<main>
	<Modal />
	<Intro id={introNavItem.id} />
	<Projects id={projectsNavItem.id} />
	<Skills id={skillsNavItem.id} />
	<ContactMe id={contactMeNavItem.id} />
	<Footer />
</main>
