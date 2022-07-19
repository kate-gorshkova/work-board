import React from 'react'
import styles from 'styles/PostsButton.module.scss'

interface Props {
    title: string,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

const PostsButton: React.FC<Props> = ({title, isOpen, setIsOpen}) => {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.button}
        >
            {title}
        </button>
    );
}

export default PostsButton;