import { POSTS_RECIEVED } from "../actions/posts";

const initState = {
	posts: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
        case POSTS_RECIEVED:
            return { ...state, posts: action.payload };
        default:
            return state;
	}
};

export default reducer;
