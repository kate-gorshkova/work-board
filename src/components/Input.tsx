import React, { CSSProperties } from 'react'
import styles from 'styles/Input.module.scss'

interface IProps {
    stylesInput?: CSSProperties,
    text: string,
    updateCurBody: (body: string) => void
}

const Input: React.FC<IProps> = ({ stylesInput, text, updateCurBody }) => {
    
    return (
        <input className={styles.input} value={text} onChange={(e) => updateCurBody(e.target.value)} style={stylesInput} type="text" />
    )
}

export default Input