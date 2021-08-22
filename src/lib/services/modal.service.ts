import { writable } from 'svelte/store';

const isModalOpen = writable(false);
const modalText = writable('');
const modalTitle = writable('');

export const modalService = {
	isModalOpen,
	modalText,
	modalTitle,
	openModal: (text: string, title: string): void => {
		modalText.set(text);
		modalTitle.set(title);
		isModalOpen.set(true);
	},
	closeModal: (): void => {
		isModalOpen.set(false);
		modalText.set('');
		modalTitle.set('');
	}
};
