import { MockedQuestionnaireRepo } from "../mockedRepository/mockedQuestionnaireRepository";

import { Questionnaire } from "../models/types/questionnaire";

export class QuestionnaireService{

    private questionnaireTitle: string;
    private questionsList: string[];

    constructor(){
        const repository = new MockedQuestionnaireRepo()
        this.questionnaireTitle = repository.getQuestionnaireTitle()
        this.questionsList = repository.getQuestionsList()
    }

    public getQuestionnaire(): Questionnaire{
        const questionnaire = {

            questionnaireTitle: this.questionnaireTitle,
            questionsText: this.questionsList

        }
        return questionnaire;
    }


}