import Koa from 'koa';
import QuestionnaireRouter from '../../../../endpoints/questionnaire/router'

// Mock the QuestionnaireService
jest.mock('../../../../services/questions', () => ({
    QuestionnaireService: jest.fn(() => ({
        getQuestionnaire: jest.fn(() => ({ questionnaireTitle: 'Test Title', questionsText: ['Question 1', 'Question 2'] }))
    }))
}));

describe('QuestionnaireRouter Unit Test', () => {
    let questionnaireRouter: QuestionnaireRouter;
    let ctx: Partial<Koa.Context>;
    let next: jest.Mock;

    beforeEach(() => {
        questionnaireRouter = new QuestionnaireRouter();
        ctx = { body: '', status: 0 };
        next = jest.fn();
    });

    it('should return questionnaire when getQuestionnaire is called', async () => {
        await questionnaireRouter.getQuestionnaire(ctx as Koa.Context, next);

        expect(ctx.status).toBe(200);
        expect(ctx.body).toEqual({ questionnaireTitle: 'Test Title', questionsText: ['Question 1', 'Question 2'] });
    });
});
