export { default as tweetsReducer } from './tweets.slice';
export { tweetsSelector, setTweets } from './tweets.slice';

export { default as authReducer } from './auth.slice';
export { setUser, removeUser, removeAuthError, authSelector, isAuth } from './auth.slice';

export { default as errorReducer } from './error.slice';
export { errorSelector, setError, removeError } from './error.slice';
