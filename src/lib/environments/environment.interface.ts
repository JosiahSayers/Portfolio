export interface Environment {
	production: boolean;
	sidelog: {
		url: string;
		clientId: string;
		apiEnabled: boolean;
	};
	contactMeService: {
		url: string;
	};
}
