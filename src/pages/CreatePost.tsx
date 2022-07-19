import CreatePostButton from 'components/createPost/CreatePostButton'
// import Input from 'components/Input'
import Textarea from 'components/createPost/Textarea'
import React from 'react'
import styles from 'styles/CreatePost.module.scss'

const CreatePost: React.FC = () => {
    return (
    <div className={styles.create_post}>
        <div className={styles.create_post__content}>
        <h1 className={styles.create_post__content__h1}>Create post</h1>
        <div className={styles.create_post__form}>
            {/* <Input text=''/> */}
            <Textarea />
            <div className={styles.create_post__button}>
            <CreatePostButton title="ADD" />
            </div>
        </div>
        </div>
    </div>
    )
}

export default CreatePost