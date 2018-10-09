import { GET_POSTS, postsRecieved } from "../actions/posts";
import api from '../api';

const middleware = (store) => (next) => (action) => {
    const { type } = action;
    switch(type){
        case GET_POSTS: {
            api('get', '/articles', {}).then(res => {
                store.dispatch(postsRecieved(res.data));
            }).catch(err => {
                console.log(err);
            })
            break;
        }
        default:
            break;
    }
    next(action);
}

export default middleware;