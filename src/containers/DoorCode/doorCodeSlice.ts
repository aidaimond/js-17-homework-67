import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DoorCodeState {
  value: string;
  stars: string;
  password: string;
  color: string;
}

const initialState: DoorCodeState = {
  value: '',
  stars: '',
  password: '2835',
  color: '',
};

export const codeSlice = createSlice({
  name: 'doorCode',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.color !== '') {
        return initialState;
      }
      if (state.value.length < 4) {
        state.stars = state.stars += '*';
        state.value = state.value + action.payload;
      }
    },
    removeNumber: (state) => {
      if (state.color !== '') {
        return initialState;
      }
      state.value = state.value.substring(0, state.value.length - 1);
      state.stars = state.stars.substring(0, state.stars.length - 1);
    },
    checkPassword: (state) => {
      if (state.value === state.password) {
        state.stars = 'Access Granted!';
        state.color = 'badge text-bg-success';
      } else {
        state.stars = 'Access Denied!'
        state.color = 'badge text-bg-danger';
      }
    },
  }
});

export const codeReducer = codeSlice.reducer;
export const {addNumber, removeNumber, checkPassword} = codeSlice.actions;