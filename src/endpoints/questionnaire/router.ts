import Koa from 'koa';
import Router from 'koa-router';

import { QuestionnaireService } from '../../services/questions';

export default class QuestionnaireRouter extends Router<Koa.DefaultState, Koa.Context> {
	private questionnaireService: QuestionnaireService

	public static getRouterPrefix(): string {
		return '/api/questions';
	}

	constructor() {
		super({
			prefix: QuestionnaireRouter.getRouterPrefix(),
		});

		this.questionnaireService = new QuestionnaireService();

		// Routes
		this.get('/', this.getQuestionnaire);
	}

	public getQuestionnaire = async (ctx: Koa.Context, _next: Koa.Next): Promise<void> => {
        
        
		ctx.body = this.questionnaireService.getQuestionnaire();
		ctx.status = 200;
	}

    
}
