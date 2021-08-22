import { LOGGER } from '$lib/logging/sidelog';

export const ContactMeServce = {
	submit: async (formFields: FormFields): Promise<{ wasSuccessful: boolean }> => {
		try {
			const res = await fetch('/api/contact-form', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(formFields)
			});
			return { wasSuccessful: res.status === 200 };
		} catch (e) {
			LOGGER.info('Error sending contact form email', e);
			return { wasSuccessful: false };
		}
	}
};

export interface FormFields {
	name: string;
	email: string;
	message: string;
}
