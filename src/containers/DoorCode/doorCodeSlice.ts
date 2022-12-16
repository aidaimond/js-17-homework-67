import {createSlice} from "@reduxjs/toolkit";

interface DoorCodeState {
  value: string;
}

const initialState: DoorCodeState = {
  value: '',
};

export const codeSlice = createSlice({
  name: 'doorCode',
  initialState,
  reducers: {
    two: (state) => {
      state.value = state.value + '2';
    },
    eight: (state) => {
      state.value = state.value + '8';
    },
    three: (state) => {
      state.value = state.value + '3';
    },
    five: (state) => {
      state.value = state.value + '5';
    },
  }
});

export const codeReducer = codeSlice.reducer;
export const {two, three, five, eight} = codeSlice.actions;