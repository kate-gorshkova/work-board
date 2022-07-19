import { ITodo, ITodoState, TodoAction, TodoActionTypes } from "types/todo";

const initialState: ITodoState = {
    todo_list: [
        {
            id: 1,
            body: 'Tea',
            done: false,
        },
        {
            id: 2,
            body: 'Water',
            done: false,
        },
        {
            id: 3,
            body: 'Cocktail',
            done: false,
        },
    ],

    cur_body: '', 
}

export const todoReduser = (state = initialState, action: TodoAction): ITodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:

            const newTodo: ITodo = {
                id: Date.now(),
                body: state.cur_body,
                done: false
            }
            
            const newTodoList = [...state.todo_list, newTodo]

            return {...state, todo_list: newTodoList, cur_body: ''}

        case TodoActionTypes.DONE_TODO: 

            const preparedTodoList = state.todo_list.map(todo => {
                const newTodo = {...todo};

                if (newTodo.id === action.payload) {
                    newTodo.done = !newTodo.done
                }

                return newTodo
            })

            return {...state, todo_list: preparedTodoList}
        
        case TodoActionTypes.DELETE_TODO:

            return {...state, todo_list: state.todo_list.filter(todo => todo.id !== action.payload)}
        
        case TodoActionTypes.UPDATE_CUR_BODY:

            return {...state, cur_body: action.payload}

        default:

            return state
    }
}
