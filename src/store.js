import {configureStore} from '@reduxjs/toolkit';
import bottlesReducer from './reducers/bottlesReducer';
import pageVisibilityReducer from './reducers/pageVisibilityReducer';

const store = configureStore({
  reducer: {
    bottles: bottlesReducer,
    visibilityStates: pageVisibilityReducer,
  },
});

export default store;
