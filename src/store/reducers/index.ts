import {combineReducers} from 'redux'
import { postReduser } from './postReducer'
import { todoReduser } from './todoReducer'

export const rootReducer = combineReducers({
    todo: todoReduser,
    post: postReduser
})

export type RootState = ReturnType<typeof rootReducer>