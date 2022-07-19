export interface ITodo {
    id: number,
    body: string,
    done: boolean
}

export interface ITodoState {
    todo_list: ITodo[],
    cur_body: string,
}

export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    DONE_TODO = 'DONE_TODO',
    UPDATE_CUR_BODY = 'UPDATE_CUR_BODY',
}

interface AddTodoAction {
    type: TodoActionTypes.ADD_TODO,
}

interface DeleteTodoAction {
    type: TodoActionTypes.DELETE_TODO,
    payload: number,
}

interface DoneTodoAction {
    type: TodoActionTypes.DONE_TODO,
    payload: number
}

interface UpdateCurBodyAction {
    type: TodoActionTypes.UPDATE_CUR_BODY,
    payload: string
}

export type TodoAction = AddTodoAction | DeleteTodoAction | DoneTodoAction | UpdateCurBodyAction