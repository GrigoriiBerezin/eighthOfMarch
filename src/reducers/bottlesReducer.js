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
      const available = toBottle.capacity - toBottle.level;
      const difference = Math.min(fromBottle.level, available);

      return {
        [action.payload.from]: {
          ...fromBottle,
          level: fromBottle.level - difference,
        },
        [action.payload.to]: {
          ...toBottle,
          level: toBottle.level + difference,
        },
      };
    },
  },
});

export const {reset, fill, pour} = slice.actions;

export default slice.reducer;
