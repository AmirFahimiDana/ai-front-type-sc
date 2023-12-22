import React from 'react'
import { useSelector } from 'react-redux';
import { historySelector } from '../../../redux/slice/history';
import styles from './questionHistory.module.css'
import QuestionCard from './questionCard';
import { Divider } from '@mui/material';


const QuestionHistory = (props:any) => {
    const history = useSelector(historySelector)
   
    function CallBack (childData:string){
        
        var message = childData
        props.handleCallback(message)
    }

    return (
        <div className={styles.container}>
            {
                history.map(h => {
                    return (
                        <>
                            <QuestionCard key={h.id} props={h} handleCallback={CallBack} />
                            <Divider />
                        </>
                    )
                })
            }
        </div>
    )
}

export default QuestionHistory