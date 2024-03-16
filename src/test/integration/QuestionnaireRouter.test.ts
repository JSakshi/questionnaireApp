import Koa from 'koa';
import QuestionnaireRouter from '../../endpoints/questionnaire/router';

describe('QuestionnaireRouter Integeration Test', () => {
    let questionnaireRouter: QuestionnaireRouter;
    let ctx: Partial<Koa.Context>
    beforeEach(() => {
        questionnaireRouter = new QuestionnaireRouter();
        ctx = { body: '', status: 0 };
    });

    it('should not throw getQuestionnaire endpoint is accessed', async () => {
        await questionnaireRouter.getQuestionnaire(ctx as Koa.Context, jest.fn());

        expect(ctx.status).toBe(200);
        expect(ctx.body).toHaveProperty('questionnaireTitle')
        expect(ctx.body).toHaveProperty('questionsText')
    });



});
