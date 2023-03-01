import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: 0, isVisible: true, title: 'Стартовая'},
  {id: 1, isVisible: false, title: 'Задача 1'},
  {id: 2, isVisible: false, title: 'Задача 2'},
  {id: 3, isVisible: false, title: 'Задача 3'},
  {id: 4, isVisible: false, title: 'Задача 4'},
];

const slice = createSlice({
  name: 'pageVisibility',
  initialState,
  reducers: {
    toggleVisibility(state, action) {
      const id = action.payload;
      return state.map((s) => s.id === id ?
        {...s, isVisible: true} :
        {...s, isVisible: false});
    },
  },
});

export const {toggleVisibility} = slice.actions;

export default slice.reducer;
