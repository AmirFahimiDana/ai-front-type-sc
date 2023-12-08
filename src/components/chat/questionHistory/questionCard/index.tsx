import React, { useState } from 'react'
import styles from '../../questionHistory/questionHistory.module.css'
import AnimateButton from '../../../../hoc/button';
import PopupComponent from '../../../popup';


const QuestionCard = (props: any) => {
    const { id, title, query } = props.props;
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>

            <div className={styles.card} key={id}>
                <span>
                    {title}
                </span>
                {/* <audio controls controlsList='nodownload' src='blob:http://localhost:3000/ed522340-d967-4976-a3b9-95f0f54b5ae1' /> */}
                {isOpen && <PopupComponent
                    query={query}
                    handleClose={togglePopup}
                />}

                <div className={styles.button_container}>
                    <AnimateButton clickHandler={togglePopup} txt='نمایش کوئری' />
                </div>
            </div>


        </>
    )
}

export default QuestionCard