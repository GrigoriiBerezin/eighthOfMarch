import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  smallBottle: {level: 0, capacity: 3},
  bigBottle: {level: 0, capacity: 5},
};

const slice = createSlice({
  name: 'bottles',
  initialState,
  reducers: {
    reset(state, action) {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          level: 0,
        },
      };
    },
    fill(state, action) {
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          level: state[action.payload].capacity,
        },
      };
    },
    pour(state, action) {
      const fromBottle = state[action.payload.from];
      const toBottle = state[action.payload.to];
      const totalLevel = fromBottle.level + toBottle.level;
      const overflow = Math.max(0, totalLevel - toBottle.capacity);

      return {
        ...state,
        [action.payload.from]: {
          ...fromBottle,
          level: Math.max(0, fromBottle.level - fromBottle.capacity + overflow),
        },
        [action.payload.to]: {
          ...toBottle,
          level: Math.min(toBottle.capacity, totalLevel),
        },
      };
    },
  },
});

export const {reset, fill, pour} = slice.actions;

export default slice.reducer;
