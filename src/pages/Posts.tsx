import Post from 'components/posts/Post'
import { useTypedSelector } from 'hooks/useTypedSelector'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPostsAC } from 'store/action-creators/post'
import styles from 'styles/Posts.module.scss'

const Posts: React.FC = () => {
    const { post_list } = useTypedSelector(state => state.post)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsAC() as any)
    }, [])

    return (
        <div className={styles.posts}>
            <div className={styles.posts__content}>
                <h1 className={styles.posts__content__h1}>Post list</h1>
                <ul className={styles.posts__list}>
                    {post_list.map(({ id, title, body }) =>
                        <Post key={id} id={id} title={title} body={body} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Posts
