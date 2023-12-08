import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHistory, historySelector } from '../../redux/slice/history';
import DataGridComponent from './dataGrid';
import axios from 'axios';
import resultData from '../../services/result2.json'
import styles from './chat.module.css'
import Loader from '../loader';
import QuestionHistory from './questionHistory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Microphone from '../../hoc/mic';
import styled from 'styled-components';


// const StyledContainer = styled(ToastContainer).attrs({
//     // custom props
// })`
//   .Toastify__toast-container {}
//   .Toastify__toast {}
//   .Toastify__toast--error {}
//   .Toastify__toast--warning {}
//   .Toastify__toast--success {}
//   .Toastify__toast-body {}
//   .Toastify__progress-bar {}
// `;

const StyledToastContainer = styled(ToastContainer).attrs({
    className: 'toast-container',
    toastClassName: 'toast',
    bodyClassName: 'body',
    progressClassName: 'progress',
})`
   /* .toast-container */
  width: 30%;

   /* .toast is passed to toastClassName */
  .toast {
    background-color: white;
    font-family:"IranSans";
  }

  button[aria-label="close"] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  .body {}

  /* .progress is passed to progressClassName */
  .progress {
    background: var(--toastify-color-success);
  }
`;

const Chat = () => {
    const dispatch = useDispatch();
    const history = useSelector(historySelector)
    const [inputValue, setInputValue] = useState<string>("");
    const [showLoader, setShowLoader] = useState(false);



    const addHandler = async () => {
        setShowLoader(true);
        setInputValue("");

        const myPromise = new Promise((resolve) =>
            fetch("https://jsonplaceholder.typicode.com/posts/1")
                .then((response) => response.json())
                .then((json) => setTimeout(() => {
                    resolve(json)
                    setShowLoader(false)
                }, 3000))
        );

        toast.promise(myPromise, {
            pending: "در حال گرفتن پاسخ از سرور و ایجاد کوئری",
            success: "کوئری ایجاد شد و نتیجه آن نمایش داده شده",
            error: "error",
        });

        //write axios Get result question from API
        // notify();
        dispatch(addHistory({
            id: history.length + 1,
            title: inputValue,
            query: resultData.content.query,
            isAudio: false,

        }))

    }

    return (
        <section className='main-container'>
            <div className='row'>
                <div className='col-3'>
                    <div>
                        <aside>
                            <QuestionHistory />
                        </aside>
                    </div>
                </div>
                <div className='col-9'>
                    <div className={styles.container}>
                        <span className={styles.header_tiltle}>پاسخگوی هوشمند</span>
                        <DataGridComponent props={resultData} />
                        <div className={styles.input_container}>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input className={styles.input_text} type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus />
                                {showLoader ? <Loader /> : null}
                                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                                <button type='submit' className={styles.submit_button} onClick={addHandler}>
                                    <i className="fab fa-telegram-plane" ></i>
                                </button>
                                <Microphone />
                                <StyledToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Chat