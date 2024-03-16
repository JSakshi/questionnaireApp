import * as Koa from 'koa';

export function addHealthCheck(app: Koa): void {
	app.use(async (ctx, next) => {
		if (ctx.path === '/healthy') {
			ctx.body = 'OK! The service is healthy';
		} else {
			await next();
		}
	});
}
