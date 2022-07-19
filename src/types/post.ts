export interface IPost {
    id: number,
    title: string,
    body: string,
    userId: number,
}

export interface ISetPost {
    title: string,
    body: string,
    userId: number,
}

export interface IPostState {
    post_list: IPost[]
}

export enum PostActionTypes {
    GET_POSTS = 'GET_POSTS',
    UPDATE_POST = 'UPDATE_POST',
    DELETE_POST = 'DELETE_POST',
    SET_POST = 'SET_POST',
}

interface GetPostsAction {
    type: PostActionTypes.GET_POSTS,
    payload: IPost[]
}

interface UpdatePostAction {
    type: PostActionTypes.UPDATE_POST,
    payload: IPost,
}

interface DeletePostAction {
    type: PostActionTypes.DELETE_POST,
}

interface SetPostAction {
    type: PostActionTypes.SET_POST,
    payload: ISetPost,
}

export type PostAction = GetPostsAction | UpdatePostAction | DeletePostAction | SetPostAction