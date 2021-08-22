<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import ContactForm from '$lib/components/contact-me/ContactForm.svelte';
	export let id: string;
</script>

<Section {id} title="Contact Me">
	<div class="pb-3" />
	<div class="columns is-vcentered">
		<div class="column has-text-centered my-3">
			<h2>
				<p>Got a site that needs built?</p>
				<p>Want to reach out about a job opportunity?</p>
				<p>Need some help getting started in web dev?</p>
				<p class="has-text-weight-bold mt-3">I'd love to hear from you!</p>
			</h2>
		</div>
		<div class="column my-3">
			<ContactForm />
		</div>
	</div>
</Section>
