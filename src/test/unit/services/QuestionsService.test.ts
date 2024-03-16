import { QuestionnaireService} from "../../../services/questions"

jest.mock("../../../mockedRepository/mockedQuestionnaireRepository", () => {
    return {
        MockedQuestionnaireRepo: jest.fn(() => ({
            getQuestionnaireTitle: jest.fn(() => "Sample Title"),
            getQuestionsList: jest.fn(() => ["Question 1", "Question 2"])
        }))
    };
});

describe("QuestionnaireService Unit Test", () => {
    const questionnaireService= new QuestionnaireService();


    it("should get questionnaire with title and questions", () => {
        const questionnaire = questionnaireService.getQuestionnaire();
        expect(questionnaire.questionnaireTitle).toEqual("Sample Title");
        expect(questionnaire.questionsText).toEqual(["Question 1", "Question 2"]);
    });
});
