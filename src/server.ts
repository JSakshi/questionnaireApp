import { Server } from 'http';
import { createHttpTerminator } from 'http-terminator';
import Koa from 'koa';

import { addRoutes } from './endpoints';
import { addHealthCheck } from './endpoints/healthy/healthy';

export async function initServer(): Promise<Server> {
	const port = 5000;
	const ip = '0.0.0.0';
	const app = await initApp();

	const server = app.listen(port, ip, () => {
		console.log(`Server listening on: ${ip}:${port}`);
	});

	process.on('SIGTERM', () => {
		console.log('Received SIGTERM. Starting app teardown');
		teardown(server);
	});

	return server;
}

export async function initApp(): Promise<Koa> {
	const app = new Koa();

	console.log('Adding endpoints');
    addHealthCheck(app);
	addRoutes(app);

	return app;
}

export async function teardown(server: Server): Promise<void> {
	console.log('Tearing down app');
	await Promise.all([
		createHttpTerminator({
			server,
			gracefulTerminationTimeout: 5000,
		}).terminate(),
	]);

	setTimeout(async () => {
		console.log('App teardown finished');
		process.exit(0);
	}, 6000);
}
