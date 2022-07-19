import Input from 'components/Input'
import Todo from 'components/todo/Todo'
import TodoButton from 'components/todo/TodoButton'
import { useTypedSelector } from 'hooks/useTypedSelector'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAC, updateCurBodyAC } from 'store/action-creators/todo'
import styles from 'styles/Todo.module.scss'

const Todos: React.FC = () => {
    const { todo_list } = useTypedSelector(state => state.todo)
    
    const { cur_body } = useTypedSelector(state => state.todo)

    const dispatch = useDispatch()

    const updateCurBody = (newBody: string) => {
        dispatch(updateCurBodyAC(newBody))
    }

    const addTodo = () => {
        dispatch(addTodoAC())
    }

    return (
        <div className={styles.todos}>
            <div className={styles.todos__content}>
                <h1 className={styles.todos__content__h1}>Todo list</h1>
                <div className={styles.todos__form}>
                    <div className={styles.todos__input}>
                        <Input text={cur_body} updateCurBody={updateCurBody} stylesInput={{ paddingRight: '176px' }} />
                        <div className={[styles.todos__input__button, styles.todos__button].join(' ')}>
                            <TodoButton title="✚" clickBtn={addTodo} />
                        </div>
                    </div>
                </div>

                <ul>
                    {todo_list.map(({ id, body, done }, index) =>
                        <Todo key={id} id={id} index={index + 1} body={body} done={done} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Todos