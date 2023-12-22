import React, { useState } from 'react'
import styles from './popup.module.css'
import AnimateButton from '../button'


const PopupComponent = (popupProps: any) => {
    const [showReason, setShowReason] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");

    const addHandler = () => {

    }

    return (
        <div className={styles.popup_box}>
            <div className={styles.box}>
                <div className={styles.close_container}>
                    <span className={styles.close_icon} onClick={popupProps.handleClose}>x</span>
                </div>
                <p>{popupProps.query}</p>
                <AnimateButton clickHandler={popupProps.handleClose} txt='تایید کوئری' />
                <AnimateButton clickHandler={() => {
                   // console.log('عدم تایید');
                    setShowReason(true);
                }} txt='عدم تایید کوئری' />
                {showReason ?
                    <div className={styles.input_container}>
                        <input className={styles.input_reason} type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus />
                        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                        <button type='submit' className={styles.submit_button} onClick={addHandler}>
                            <i className="fab fa-telegram-plane" ></i>
                        </button>
                    </div>
                    : null}

            </div>
        </div>
    )
}

export default PopupComponent