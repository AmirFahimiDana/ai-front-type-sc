import React from 'react'
import styles from './loader.module.css'

function Loader() {
    return (
        <>
            <div className={styles.showbox}>
                <div className={styles.loader}>
                    <svg className={styles.circular} viewBox="25 25 50 50">
                        <circle className={styles.path} cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Loader