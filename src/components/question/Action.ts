import { IQuestionState } from "./State";

export enum QuestionAction {
    QuestionResult
}

export interface IQuestionAction {
    type: QuestionAction;
    payload: Partial<IQuestionState>;
}