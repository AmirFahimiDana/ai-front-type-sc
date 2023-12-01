import { IQuestionAction, QuestionAction } from "./Action";
import { IQuestionState } from "./State";

export const reducer = (state: IQuestionState, action: IQuestionAction): IQuestionState => {

    return { ...state, ...action.payload };
    // switch (action.type) {
    //     case: PersonAction.InsertPerson
    //        state.persons?.push(action.payload);
    //        return 
    //     default:
    //         return { ...state, ...action.payload };
    // }
}