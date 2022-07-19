import React from 'react'
import styles from 'styles/TodoButton.module.scss'

interface Props {
    title: string,
    done?: boolean,
    clickBtn: () => void,
}

const TodoButton: React.FC<Props> = ({title, done, clickBtn}) =>  {

    return (
        <button
            className={[styles.button, done && styles.button__done].join(' ')}
            onClick={clickBtn}
        >
            {title}
        </button>
    );
}

export default TodoButton