export interface ProjectInterface {
	name: string;
	url?: string;
	sourcecodeUrl?: string;
	imageUrl: string;
	description: string;
	technologies: string[];
	features: Array<string | ProjectFeature>;
}

export interface ProjectFeature {
	text: string;
	url: string;
}
