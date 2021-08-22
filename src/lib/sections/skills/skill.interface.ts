export interface Skill {
	category: string;
	technologies: Array<{
		name: string;
		type: string;
		tags: Array<string>;
	}>;
}
