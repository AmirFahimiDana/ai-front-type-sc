import React, { useState } from 'react'
import styles from '../../questionHistory/questionHistory.module.css'
import AnimateButton from '../../../button';
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
                {isOpen && <PopupComponent
                    query={query}
                    handleClose={togglePopup}
                />}

                <AnimateButton clickHandler={togglePopup} txt='نمایش کوئری' />
            </div>


        </>
    )
}

export default QuestionCard