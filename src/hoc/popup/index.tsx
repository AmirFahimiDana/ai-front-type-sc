import React, { useState } from 'react'
import styles from './popup.module.css'
import AnimateButton from '../button'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { closePopup, popupSelector } from '../../redux/slice/popupSlice';
import { useDispatch } from 'react-redux';

const PopupComponent = () => {
    const [showReason, setShowReason] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [err, setErr] = useState('');
    const popupValues = useSelector(popupSelector);
    const dispatchPopup = useDispatch();

    const handleClosePopup = () => {
        dispatchPopup(closePopup());
    };

    const notValidHandler = async () => {
        try {
            const response = await toast.promise(fetch(` http://192.168.10.41:8000/valid/?qs=${popupValues.question.title}&qr=${popupValues.query.query}t&val=0&exp=${inputValue}`, {

                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }), {
                // pending: "در حال گرفتن پاسخ از سرور و ایجاد کوئری",
                success: "نظر شما ثبت شد",
                error: "مشکل در ارسال دیتا"
            });


            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }


        } catch (err: any) {
            setErr(err.message);
        } finally {
            //setIsLoading(false);
        }

        handleClosePopup()
    }

    const validHandler = async () => {
        try {
            const response = await toast.promise(fetch(`http://192.168.10.41:8000/valid/?qs=${popupValues.question.title}&qr=${popupValues.query.query}&val=1`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }), {
                // pending: "در حال گرفتن پاسخ از سرور و ایجاد کوئری",
                success: "نظر شما ثبت شد",
                error: "مشکل در ارسال دیتا"
            });


            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }


        } catch (err: any) {
            setErr(err.message);
        } finally {
            //setIsLoading(false);
        }


        handleClosePopup()
    }


    return (
        <div className={styles.popup_box}>
            <div className={styles.box}>
                <div className={styles.close_container}>
                    <span className={styles.close_icon} onClick={handleClosePopup}>x</span>
                </div>
                <p>{popupValues.query.query}</p>
                <AnimateButton clickHandler={validHandler} txt='تایید کوئری' />
                <AnimateButton clickHandler={() => {
                    setShowReason(true);
                }} txt='عدم تایید کوئری' />
                {showReason ?
                    <div className={styles.input_container}>
                        <input className={styles.input_reason} type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus />
                        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                        <button type='submit' className={styles.submit_button} onClick={notValidHandler}>
                            <i className="fab fa-telegram-plane" ></i>
                        </button>
                    </div>
                    : null}

            </div>
        </div>
    )
}

export default PopupComponent