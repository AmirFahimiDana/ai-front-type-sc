import { createCtx } from "../../hoc";
import { IQuestionState } from "./State";
import { IQuestionAction } from "./Action";

export const QuestionContext = createCtx<IQuestionState, IQuestionAction>({});


