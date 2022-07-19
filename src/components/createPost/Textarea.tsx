import React from 'react'
import styles from 'styles/Textarea.module.scss'

const Textarea: React.FC = () => {
    return (
        <textarea className={styles.textarea} rows={10}></textarea>
    )
}

export default Textarea