import type { ProjectInterface } from './project.interface';

export const projects: ProjectInterface[] = [
	{
		name: 'Shrtlnk',
		url: 'https://shrtlnk.dev',
		sourcecodeUrl: 'https://github.com/JosiahSayers/shrtlnk',
		imageUrl: 'https://www.josiahsayers.com/img/projects/shrtlnk.png',
		description: 'A link shortening application with an API and developer portal',
		technologies: ['.NET Core', 'MongoDB', 'MS SQL Server', 'Swagger'],
		features: [
			'Allows users to create shortened links to any webpage',
			'Easy to use API for developers',
			'Developer portal where a user can create and remove applications, with each one being provided a unique API key. The developer portal also shows statistics about the links created with each application.',
			'Chrome extension to quickly create shortened links when browsing any website'
		]
	},
	{
		name: 'Sidelog',
		sourcecodeUrl: 'https://github.com/JosiahSayers/sidelog',
		imageUrl: '',
		description: 'Easy to use and cheap to run logging solution for side projects',
		technologies: ['Node.js', 'Express', 'TypeScript', 'Docker', 'MongoDB', 'Jest', 'Angular'],
		features: [
			'Fully configurable from a single JSON file',
			"Support for multiple application's logs on one server",
			{
				text: '<link>Angular library</link> published on NPM for easy API consumption',
				url: 'https://www.npmjs.com/package/sidelog-angular'
			},
			'100% test coverage',
			'Single command local setup for easy development utilizing docker-compose'
		]
	},
	{
		name: 'Taco Especial',
		url: 'https://taco.josiahsayers.com',
		sourcecodeUrl: 'https://github.com/JosiahSayers/Taco-Especial',
		imageUrl: '',
		description: 'Service to suggest randomly customized menu items from Taco Bell',
		technologies: ['Svelte', 'Node.js', 'TypeScript', 'Express', 'Cheerio', 'Axios'],
		features: [
			'API provides up to date menu information by scraping TacoBell.com and caching the results',
			'Front end app allows the user to fine tune their recommendations by pulling in available customization options from the API'
		]
	},
	{
		name: 'Portfolio',
		url: 'https://josiahsayers.com',
		sourcecodeUrl: 'https://github.com/JosiahSayers/Portfolio',
		imageUrl: '',
		description: 'This website! Built using Svelte and serverless functions',
		technologies: ['Svelte', 'SvelteKit', 'Node.js', 'TypeScript', 'Bulma', 'MailerSend'],
		features: [
			'Contact Me API built with a Node.js serverless function utilizing the MailerSend API to send me an email of each form submission',
			'UI built with Svelte',
			'Utilizes SvelteKit to generate static assets which helps with page load time and allows the site to render without javascript'
		]
	}
];

export const technologyLinks = {
	'.NET Core': 'https://dotnet.microsoft.com/',
	MongoDB: 'https://www.mongodb.com/',
	'MS SQL Server': 'https://www.microsoft.com/en-us/sql-server/',
	Swagger: 'https://swagger.io/',
	'Node.js': 'https://nodejs.org/',
	Express: 'https://expressjs.com/',
	TypeScript: 'https://www.typescriptlang.org/',
	Docker: 'https://www.docker.com/',
	Jest: 'https://jestjs.io/',
	Svelte: 'https://svelte.dev/',
	Angular: 'https://angular.io/',
	Bulma: 'https://bulma.io/',
	Cheerio: 'https://cheerio.js.org/',
	Axios: 'https://github.com/axios/axios',
	MailerSend: 'https://www.mailersend.com/',
	SvelteKit: 'https://kit.svelte.dev/'
};
