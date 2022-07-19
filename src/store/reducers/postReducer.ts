import { IPostState, PostAction, PostActionTypes } from "types/post";

const initialState: IPostState = {
    post_list: [],
}

export const postReduser = (state = initialState, action: PostAction): IPostState => {
    switch (action.type) {
        case PostActionTypes.GET_POSTS:

            return {...state, post_list: action.payload}

        default:

            return state    
    }
}
