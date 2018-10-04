import { applyMiddleware } from 'redux';
import posts from './posts';

const middleware = [posts];

export default applyMiddleware(...middleware);
