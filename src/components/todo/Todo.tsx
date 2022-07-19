import React from 'react'
import TodoButton from './TodoButton'
import styles from 'styles/Todo.module.scss'
import { ITodo } from 'types/todo'
import { deleteTodoAC, doneTodoAC } from 'store/action-creators/todo'
import { useDispatch } from 'react-redux'

interface IProps extends ITodo {
    index: number,
}

const Todo: React.FC<IProps> = ({ id, body, done, index }) => {
    const dispatch = useDispatch()
    
    const doneTodo = () => {
        dispatch(doneTodoAC(id))
    }

    const deleteTodo = () => {
        dispatch(deleteTodoAC(id))
    }

    return (
        <li className={styles.todo}>
            <span className={styles.todo__content}><strong>{index}.</strong> {body}</span>
            <div className={styles.todo__button}>
                <TodoButton title="✔" done={done} clickBtn={doneTodo}/>
                {
                    !done && (
                    <>
                        <TodoButton title="✘" done={done} clickBtn={deleteTodo}/>
                        <TodoButton title="✎" done={done} clickBtn={deleteTodo}/>
                    </>
                    )
                }
            </div>
        </li>
    )
}

export default Todo