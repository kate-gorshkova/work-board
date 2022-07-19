import axios from "axios";
import { Dispatch } from "react";
import { PostAction, PostActionTypes } from "types/post";

export const getPostsAC = () => async (dispatch: Dispatch<PostAction>) => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    )
    dispatch({ type: PostActionTypes.GET_POSTS, payload: response.data })
}

export const deletePostAC = (id: number) => async (dispatch: Dispatch<PostAction>) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch(getPostsAC() as any)
}