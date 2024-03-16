import * as Koa from 'koa';

import QuestionnaireRouter from './questionnaire/router';

async function handleErrors(ctx: Koa.Context, next: () => void): Promise<void> {
	try {
		await next();
	} catch (error: any) {
		error.status = error.statusCode || error.status || 500;
		if (error.status >= 400 && error.status < 500) {
			console.log(error.message, { additionalAttributes: { ctx } });
		}

		if (error.status >= 500 && error.status < 600) {
			console.log(`Unexpected error occurred! ${error.message}`);
		}
		throw error;
	}
}

export function addRoutes(app: Koa): void {
	app.use(handleErrors);
	app.use(new QuestionnaireRouter().routes());
}
