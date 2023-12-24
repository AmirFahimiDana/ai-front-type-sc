import React, { useState } from 'react'
import { examples } from '../../data/example'
import { IReasearchGate } from '../../interface/iResearchGate'
import { Link } from 'react-router-dom';
import styles from './home.module.css'
import { limitation } from '../../data/limitation';
import { capabilities } from '../../data/capabilities';

const Home = () => {
    const [items, setItems] = useState([]);

    const clickHandler: any = (val: any) => {

        localStorage.setItem('items', JSON.stringify(val));
    }

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.container}>
                    <section>
                        <span className={styles.header_span}>Examples</span>
                        {examples.map((data: IReasearchGate) => {
                            return (
                                <Link onClick={() => clickHandler(data.title)} to='/chat'>{data.title}</Link>


                            )
                        })}</section>

                    <section>
                        <span className={styles.header_span}>Limitation</span>
                        {limitation.map((data: IReasearchGate) => {
                            return (
                                <span>{data.title}</span>
                            )
                        })}</section>

                    <section>
                        <span className={styles.header_span}>Capabilities</span>
                        {capabilities.map((data: IReasearchGate) => {
                            return (
                                <span>{data.title}</span>
                            )
                        })}</section>

                </div>
            </div>


        </>
    )
}

export default Home