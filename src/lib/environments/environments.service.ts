import { dev } from '$app/environment';

export const environment = {
	production: !dev,
	sidelog: {
		url: import.meta.env.VITE_SIDELOG_URL as string,
		clientId: import.meta.env.VITE_SIDELOG_CLIENT_ID as string,
		apiEnabled: import.meta.env.VITE_SIDELOG_ENABLED === 'true'
	}
};
