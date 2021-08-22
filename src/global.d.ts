/// <reference types="@sveltejs/kit" />
import type { Environment } from './environments/environment.interface';

declare global {
	const environment: Environment;
}
