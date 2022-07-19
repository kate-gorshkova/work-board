import React from 'react'
import styles from 'styles/CreatePostButton.module.scss'

interface Props {
    title: string
}

const CreatePostButton: React.FC<Props> = ({title}) => {
    return (
        <button
            className={styles.button}
        >
            {title}
        </button>
    );
}

export default CreatePostButton;