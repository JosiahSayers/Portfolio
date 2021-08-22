<script lang="ts">
	import { modalService } from '$lib/services/modal.service';
	let isOpen = false;
	let modalText = '';
	let modalTitle = '';
	modalService.isModalOpen.subscribe((newValue) => (isOpen = newValue));
	modalService.modalText.subscribe((newValue) => (modalText = newValue));
	modalService.modalTitle.subscribe((newValue) => (modalTitle = newValue));
</script>

<div class="modal" class:is-active={isOpen}>
	<div class="modal-background" on:click={modalService.closeModal} />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">{modalTitle}</p>
			<button class="delete" aria-label="close" on:click={modalService.closeModal} />
		</header>
		<section class="modal-card-body">
			{modalText}
		</section>
		<footer class="modal-card-foot">
			<button class="button" on:click={modalService.closeModal}>Close</button>
		</footer>
	</div>
</div>
