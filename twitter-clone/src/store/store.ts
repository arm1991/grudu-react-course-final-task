import { configureStore } from '@reduxjs/toolkit';

import { tweetsReducer, authReducer, errorReducer } from './slices';

const store = configureStore({
  reducer: { tweets: tweetsReducer, auth: authReducer, error: errorReducer },
});

export default store;
