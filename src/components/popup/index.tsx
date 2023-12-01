import React from 'react'
import styles from './popup.module.css'
import AnimateButton from '../button'


const PopupComponent = (popupProps: any) => {

    return (
        <div className={styles.popup_box}>
            <div className={styles.box}>
                <span className={styles.close_icon} onClick={popupProps.handleClose}>x</span>
                <p>{popupProps.query}</p>
                <AnimateButton clickHandler={() => {
                    console.log('تایید');
                }} txt='تایید کوئری' />
            </div>
        </div>
    )
}

export default PopupComponent