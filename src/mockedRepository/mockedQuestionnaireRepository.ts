
import { QuestionnaireRepository } from "../models/interfaces/questionRepository";

export class MockedQuestionnaireRepo implements QuestionnaireRepository{

    getQuestionnaireTitle(): string {
        return 'Mocked Title';
    }

    getQuestionsList(): string[] {
        return ['Mocked Question 1', 'Mocked Question 2', 'Mocked Question 3', 'Mocked Question 4'];
    }


}