import React, { useState } from 'react'
import styles from 'styles/Posts.module.scss'
import PostsButton from 'components/posts/PostsButton'
import ActionMenu from './ActionMenu'

interface IProps {
    id: number,
    title: string,
    body: string,
}

const Post: React.FC<IProps> = ({ id, title, body }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li className={styles.posts__list__item}>
            <div className={styles.posts__list__item__content}>
                <strong className={styles.posts__list__item__content__title}>{id}. {title}</strong>
                <span className={styles.posts__list__item__content__body}>{body}</span>
            </div>
            <div className={styles.menu}>
                <PostsButton title={'...'} isOpen={isOpen} setIsOpen={setIsOpen}/>
                {
                    isOpen && <ActionMenu id={id}/>
                }
            </div>
        </li>
    )
}

export default Post