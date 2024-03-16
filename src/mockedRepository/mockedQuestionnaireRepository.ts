import { QuestionnaireRepository } from "../models/interfaces/questionRepository";
export class MockedQuestionnaireRepo implements QuestionnaireRepository {
  getQuestionnaireTitle(): string {
    return "Geography Questions";
  }

  getQuestionsList(): string[] {
    return [
      "What is the capital of Cuba?",

      "What is the capital of France?",

      "What is the capital of Poland?",

      "What is the capital of Germany?",
    ];
  }
}
