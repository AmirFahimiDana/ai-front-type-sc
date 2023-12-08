import React from 'react'
import styles from './popup.module.css'
import AnimateButton from '../../hoc/button'


const PopupComponent = (popupProps: any) => {

    return (
        <div className={styles.popup_box}>
            <div className={styles.box}>
                <div className={styles.close_container}>
                    <span className={styles.close_icon} onClick={popupProps.handleClose}>x</span>
                </div>
                <p>{popupProps.query}</p>
                <AnimateButton clickHandler={() => {
                    console.log('تایید');
                }} txt='تایید کوئری' />
            </div>
        </div>
    )
}

export default PopupComponent