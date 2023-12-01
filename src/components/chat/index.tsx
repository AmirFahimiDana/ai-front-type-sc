import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addHistory, historySelector } from '../../redux/slice/history';
import DataGridComponent from './dataGrid';
import axios from 'axios';
import resultData from '../../services/result2.json'
import styles from './chat.module.css'
import Loader from '../loader';
import QuestionHistory from './questionHistory';

const Chat = () => {
    const dispatch = useDispatch();
    const history = useSelector(historySelector)
    const [inputValue, setInputValue] = useState<string>("");


    const addHandler = async () => {
        //write axios Get result question from API

        dispatch(addHistory({
            id: history.length + 1,
            title: inputValue,
            query: resultData.content.query,
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
                                <input className={styles.input_text} type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                <Loader />
                                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                                <button type='submit' className={styles.submit_button} onClick={addHandler}> <i className="fab fa-telegram-plane" ></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Chat