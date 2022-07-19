import CreatePost from "pages/CreatePost";
import Posts from "pages/Posts";
import Todos from "pages/Todos";

export const routes = [
    {path: '/', component: CreatePost},
    {path: '/create-post', component: CreatePost},
    {path: '/posts', component: Posts},
    {path: '/todos', component: Todos},
]