// import { Dispatch } from "redux"
import { TodoAction, TodoActionTypes } from "../../types/todo"
// import axios from 'axios'

export const addTodoAC = (): TodoAction => {
    return {type: TodoActionTypes.ADD_TODO} 
}

export const doneTodoAC = (id: number): TodoAction => {
    return {type: TodoActionTypes.DONE_TODO, payload: id} 
}

export const deleteTodoAC = (id: number): TodoAction => {
    return {type: TodoActionTypes.DELETE_TODO, payload: id} 
}

export const updateCurBodyAC = (cur_body: string): TodoAction => {
    return {type: TodoActionTypes.UPDATE_CUR_BODY, payload: cur_body} 
}
