import type { technologyLinks } from "./projects";

export interface ProjectInterface {
	name: string;
	url?: string;
	sourcecodeUrl?: string;
	imageUrl: string;
	description: string;
	technologies: Array<keyof typeof technologyLinks>;
	features: Array<string | ProjectFeature>;
}

export interface ProjectFeature {
	text: string;
	url: string;
}
