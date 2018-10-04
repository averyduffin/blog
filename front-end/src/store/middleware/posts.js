import { GET_POSTS, postsRecieved } from "../actions/posts";

const middleware = (store) => (next) => (action) => {
    const { type } = action;
    switch(type){
        case GET_POSTS: {
            store.dispatch(postsRecieved());
            break;
        }
        default:
            break;
    }
    next(action);
}

export default middleware;