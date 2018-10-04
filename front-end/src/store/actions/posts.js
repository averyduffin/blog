export const GET_POSTS = 'GET_POSTS';
export const POSTS_RECIEVED = 'POSTS_RECIEVED';

export const getPosts = () => ({
    type: GET_POSTS,
});

export const postsRecieved = (posts) => ({
    type: POSTS_RECIEVED,
    payload: posts,
});