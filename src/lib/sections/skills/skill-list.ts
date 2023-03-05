import type { Skill } from './skill.interface';

export const SKILL_LIST: Skill[] = [
	{
		category: 'Frontend',
		technologies: [
			{
				name: 'JavaScript',
				type: 'Language',
				tags: []
			},
			{
				name: 'TypeScript',
				type: 'Language',
				tags: []
			},
			{
				name: 'React',
				type: 'Frontend Framework',
				tags: ['TypeScript', 'JavaScript']
			},
			{
				name: 'Svelte',
				type: 'Frontend Framework',
				tags: ['TypeScript', 'JavaScript', 'Single Page App']
			},
			{
				name: 'Angular',
				type: 'Frontend Framework',
				tags: ['TypeScript', 'JavaScript', 'Single Page App', 'SASS/SCSS']
			},
			{
				name: 'Jest',
				type: 'Testing',
				tags: ['Unit Testing']
			},
			{
				name: 'Vitest',
				type: 'Testing',
				tags: ['Unit Testing']
			},
			{
				name: 'Cypress',
				type: 'Testing',
				tags: ['End-to-end Testing']
			},
			{
				name: 'Karma/Jasmine',
				type: 'Testing',
				tags: ['Unit Testing']
			}
		]
	},
	{
		category: 'Backend',
		technologies: [
			{
				name: 'Node.js',
				type: 'Runtime Environment',
				tags: ['TypeScript', 'JavaScript']
			},
			{
				name: 'Express.js',
				type: 'Backend Framework',
				tags: []
			},
			{
				name: 'Remix',
				type: 'Backend Framework',
				tags: []
			},
			{
				name: 'SvelteKit',
				type: 'Backend Framework',
				tags: []
			},
			{
				name: 'Ruby on Rails',
				type: 'Backend Framework',
				tags: ['Ruby']
			},
			{
				name: 'MongoDB',
				type: 'Database',
				tags: []
			},
			{
				name: 'Postgres',
				type: 'Database',
				tags: [],
			},
			{
				name: 'MS SQL Server',
				type: 'Database',
				tags: []
			},
			{
				name: 'SQL',
				type: 'Language',
				tags: []
			}
		]
	},
	{
		category: 'Cloud',
		technologies: [
			{
				name: 'Firebase',
				type: 'Backend as a Service',
				tags: [
					'Authentication',
					'Cloud Functions',
					'Cloud Storage',
					'NoSQL Database',
					'Cloud Provider'
				]
			},
			{
				name: 'Apigee',
				type: 'API Gateway',
				tags: []
			},
			{
				name: 'Google Cloud Platform',
				type: 'Cloud Provider',
				tags: []
			}
		]
	},
	{
		category: 'Development Tools',
		technologies: [
			{
				name: 'Docker',
				type: 'Virtualization Tools',
				tags: []
			},
			{
				name: 'Git',
				type: 'Source Control',
				tags: []
			}
		]
	}
];
