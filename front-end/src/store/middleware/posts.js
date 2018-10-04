import { GET_POSTS, postsRecieved } from "../actions/posts";
import api from '../api';

const middleware = (store) => (next) => (action) => {
    const { type } = action;
    switch(type){
        case GET_POSTS: {
            store.dispatch(postsRecieved());
            api();
            break;
        }
        default:
            break;
    }
    next(action);
}

export default middleware;