import { v4 as uuid } from 'uuid';
import { environment } from '$lib/environments/environments.service';

const sessionId = uuid();

async function sendLog(level: LogLevel, message: string, json?: any): Promise<any> {
	const body = { level, message, json: { sessionId, ...json } };

	return environment.sidelog.apiEnabled
		? fetch(environment.sidelog.url, {
				method: 'POST',
				headers: {
					clientId: environment.sidelog.clientId,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
		  })
		: null;
}

export const LOGGER = {
	info: async (message: string, json?: any): Promise<any> => sendLog('info', message, json)
};

type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'trace';
