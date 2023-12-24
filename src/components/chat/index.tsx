import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHistory, historySelector } from '../../redux/slice/history';
import DataGridComponent from './dataGrid';
import axios from 'axios';
import resultData from '../../services/result2.json'
import styles from './chat.module.css'
import QuestionHistory from './questionHistory';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Microphone from '../../hoc/mic';
import styled from 'styled-components';
import { getQuery, getData } from '../../services/api';


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
    // const [resultQuery, setResultQuery] = useState<string>("");
    const [answerData, setAnswerData] = useState<any>([])
    const [err, setErr] = useState('');
    let resultQuery = ""


  



    const addHandler = async () => {
        answerData.splice(0, answerData.length)
        setInputValue("");


        try {
            const response = await toast.promise(fetch(`http://192.168.10.41:8000/result/?param=${inputValue}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }), {
                pending: "در حال گرفتن پاسخ از سرور و ایجاد کوئری",
                success: "کوئری ایجاد شد و نتیجه آن نمایش داده شده",
                error: "مشکل در گرفتن دیتا"
            });



            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            resultQuery = JSON.stringify(result.content.query);

            const resultData = result.data
            for (let index = 0; index < resultData.length; index++) {
                Object.assign(resultData[index], { id: index + 1 }, { rowId: index + 1 });
            }

            const columnFields = result.content.fields.map((c: any) => ({ field: c.Field_Name, headerName: c.Field_Title, editable: false }))
            columnFields.push({ field: "id", headerName: "Id", editable: false })
            columnFields.push({ field: "rowId", headerName: "RowId", editable: false })

            const dataAndFields: any = [resultData, columnFields];
            answerData.push(dataAndFields);

            setAnswerData(answerData)

        } catch (err: any) {
            setErr(err.message);
        } finally {
            //setIsLoading(false);
        }

        dispatch(addHistory({
            id: history.length + 1,
            title: inputValue,
            query: resultQuery,
            isAudio: false,

        }))

    }


    function CallBack(childData: string) {
        setInputValue(childData)

    }

    return (
        <section className='main-container'>
            <div className='row'>
                <div className='col-3'>
                    <div>
                        <aside>
                            <QuestionHistory handleCallback={CallBack} />
                        </aside>
                    </div>
                </div>
                <div className='col-9'>
                    <div className={styles.container}>
                        <span className={styles.header_tiltle}>پاسخگوی هوشمند</span>
                        <DataGridComponent props={answerData} />
                        <div className={styles.input_container}>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input className={styles.input_text} type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoFocus />
                                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                                <button type='submit' className={styles.submit_button} onClick={addHandler}>
                                    <i className="fab fa-telegram-plane" ></i>
                                </button>
                                <Microphone />

                                <StyledToastContainer
                                    position="top-right"
                                    autoClose={3000}
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