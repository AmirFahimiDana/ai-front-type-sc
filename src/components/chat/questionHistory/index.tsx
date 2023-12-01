import React from 'react'
import { useSelector } from 'react-redux';
import { historySelector } from '../../../redux/slice/history';
import styles from './questionHistory.module.css'
import QuestionCard from './questionCard';
import { Divider } from '@mui/material';


const QuestionHistory = () => {
    const history = useSelector(historySelector)

    return (
        <div className={styles.container}>
            {
                history.map(h => { return <> <QuestionCard key={h.id} props={h} /> <Divider /></> })
            }

        </div>
    )
}

export default QuestionHistory