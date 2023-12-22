import React, { FC, useContext, useEffect, useMemo, useReducer } from 'react'
import { QuestionContext } from './Context'
import { reducer } from './Reducer';
import { QuestionAction } from './Action';
import { IQuestionResult } from '../../common/models';
import result2 from '../../services/result2.json'


const Question: FC = () => {
    const [state, dispatch] = useReducer(reducer, {});

    // const { state:{questionResult}, dispatch } = useContext(QuestionContext);
    useEffect(() => {
        dispatch({ type: QuestionAction.QuestionResult, payload: { questionResult: result2 as IQuestionResult } });
    }, [])

    // console.log(state.questionResult?.content.data);

    return (
        <QuestionContext.Provider
            value={useMemo(() => { return { state, dispatch } }, [state, dispatch])}
        >
            <div>

            </div>
        </QuestionContext.Provider>
    )
}

export default Question