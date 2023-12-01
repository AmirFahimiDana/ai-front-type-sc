import React from 'react'
import styles from './AnimateButton.module.css'

interface buttonProps {
    txt: string;
    clickHandler: any
}

const AnimateButton: React.FC<buttonProps> = ({ txt, clickHandler }) => {


    return (
        <button onClick={clickHandler} className={`${styles.custom_btn} ${styles.btn_5} `}><span>{txt}</span></button>
    )
}

export default AnimateButton