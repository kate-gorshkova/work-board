// import TodoButton from 'components/todo/TodoButton'
import TodoButton from 'components/todo/TodoButton'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePostAC } from 'store/action-creators/post'
import styles from 'styles/ActionMenu.module.scss'

interface IProps {
    id: number,
}

const ActionMenu: React.FC<IProps> = ({id}) => {
    const dispatch = useDispatch()
    
    const deletePost = () => {
        dispatch(deletePostAC(id) as any)
    }
    
    return (
        <div className={styles.menu}>
            <div className={styles.menu__btn}>
                {/* <TodoButton title="✔" /> */}
            </div>
            <div className={styles.menu__btn}>
                <TodoButton title="✘" clickBtn={deletePost}/>
            </div>
        </div>
    )
}

export default ActionMenu