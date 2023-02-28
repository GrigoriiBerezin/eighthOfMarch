import {configureStore} from '@reduxjs/toolkit';
import bottlesReducer from './reducers/bottlesReducer';

const store = configureStore({
  reducer: {
    bottles: bottlesReducer,
  },
});

export default store;
