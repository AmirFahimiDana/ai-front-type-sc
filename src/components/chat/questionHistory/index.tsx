import { useState } from 'react'
import { useSelector } from 'react-redux';
import { historySelector } from '../../../redux/slice/history';
import styles from './questionHistory.module.css'
import styles2 from '../../chat/chat.module.css'
import QuestionCard from './questionCard';
import { Divider } from '@mui/material';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';


const QuestionHistory = (props: any) => {
    const history = useSelector(historySelector)
    const [isOpen, setIsOpen] = useState(true);

    function CallBack(childData: string) {
        var message = childData
        props.handleCallback(message)
    }

    const clickHandler = () => {
        setIsOpen(!isOpen)

        const gridContainer = document.getElementById("gridContainer");
        const sideBar = document.getElementById('sideBar');
        const inputText = document.getElementById('inputText');
        const questionCard = document.getElementById('questionCard');
        const historyContainer = document.getElementById('historyContainer');

        if (questionCard && isOpen) { questionCard.style.visibility = 'hidden' }
        if (historyContainer && isOpen) { historyContainer.style.overflow = 'hidden'; }
        if (gridContainer && isOpen) { gridContainer.className = 'col-11' }
        if (sideBar && isOpen) { sideBar.className = 'col-1'; }
        if (inputText && isOpen) { inputText.className = `${styles2.input_text} ${styles2.input_max}` }

        if (gridContainer && !isOpen) { gridContainer.className = 'col-10' }
        if (sideBar && !isOpen) { sideBar.className = 'col-2'; }
        if (inputText && !isOpen) { inputText.className = `${styles2.input_text} ${styles2.input_min}` }
        if (questionCard && !isOpen) { questionCard.style.visibility = 'visible' }
        if (historyContainer && !isOpen) { historyContainer.style.overflow = 'scroll' }

    }

    return (
        <>
            <div id='historyContainer' className={!isOpen ? `${styles.container} ${styles.close}` : `${styles.container}`}>
                <button className={styles.toggle_button} onClick={clickHandler}>
                    {!isOpen ? <CIcon icon={icon.cilArrowCircleRight} size='sm' /> : <CIcon icon={icon.cilArrowCircleLeft} size='sm' />}

                </button>
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
        </>
    )

}

export default QuestionHistory